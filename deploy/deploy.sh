#!/usr/bin/env bash
# Routine deploy: pushes the current branch to the o2switch server, which
# triggers the post-receive hook (npm ci, prisma generate, prisma migrate
# deploy, nuxt build, restart) automatically. Run deploy/setup-remote.sh once
# before the first use of this script.
#
# Deploying more than one independent site (own domain, own database) from
# this same codebase: pass a target name, e.g. `bash deploy/deploy.sh
# logicielbi`, which reads deploy/deploy.logicielbi.config instead of the
# default deploy/deploy.config, and pushes to its own git remote
# ("o2switch-logicielbi" instead of "o2switch") so the two never collide.
set -euo pipefail

TARGET="${1:-}"
REMOTE_NAME="o2switch"
CONFIG_NAME="deploy.config"
if [ -n "$TARGET" ]; then
  REMOTE_NAME="o2switch-$TARGET"
  CONFIG_NAME="deploy.$TARGET.config"
fi

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_FILE="$DIR/$CONFIG_NAME"

if [ ! -f "$CONFIG_FILE" ]; then
  echo "Missing $CONFIG_FILE — copy deploy.config.example to $CONFIG_NAME and fill it in first." >&2
  exit 1
fi
# shellcheck disable=SC1090
source "$CONFIG_FILE"

: "${SSH_HOST:?$CONFIG_NAME: SSH_HOST is required}"
: "${SSH_USER:?$CONFIG_NAME: SSH_USER is required}"
SSH_PORT="${SSH_PORT:-22}"
REMOTE_GIT_DIR="${REMOTE_GIT_DIR:-git/caissebi.git}"
DOMAIN="${DOMAIN:-}"

cd "$DIR/.."

if ! git rev-parse --git-dir >/dev/null 2>&1; then
  echo "Not a git repository. Run 'git init', commit your code, then re-run this script." >&2
  exit 1
fi

if ! git rev-parse HEAD >/dev/null 2>&1; then
  echo "No commits yet on this branch. Configure your git identity and make the first commit, then re-run:" >&2
  echo "  git config --global user.name \"Your name\"" >&2
  echo "  git config --global user.email \"you@example.com\"" >&2
  echo "  git add -A && git commit -m \"Initial commit\"" >&2
  exit 1
fi

if ! git remote get-url "$REMOTE_NAME" >/dev/null 2>&1; then
  echo "==> Adding git remote '$REMOTE_NAME'"
  git remote add "$REMOTE_NAME" "ssh://${SSH_USER}@${SSH_HOST}:${SSH_PORT}/~/${REMOTE_GIT_DIR}"
fi

BRANCH="$(git rev-parse --abbrev-ref HEAD)"
echo "==> Pushing '$BRANCH' to $REMOTE_NAME (this triggers the remote build — can take a few minutes)"
git push "$REMOTE_NAME" "${BRANCH}:main"

echo ""
echo "==> Deploy pushed. Tail the build output live with:"
echo "    ssh -p $SSH_PORT $SSH_USER@$SSH_HOST"
if [ -n "$DOMAIN" ]; then
  echo "==> Once the build finishes, visit https://${DOMAIN}"
fi
