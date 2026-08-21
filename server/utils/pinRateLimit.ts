// Lightweight in-memory brute-force guard for PIN unlock attempts.
// A 4-digit PIN only has 10,000 combinations, so we lock out a user's PIN
// attempts for a short cooldown after too many consecutive failures. This is
// intentionally simple (no Redis, no persistence) — good enough for a
// single-process POS deployment; a server restart just resets everyone's
// counters, which is an acceptable tradeoff for this app's scale.

const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 30_000; // 30 seconds

interface AttemptState {
  count: number;
  lockedUntil: number | null;
}

const attempts = new Map<number, AttemptState>();

export function checkPinLockout(userId: number): { locked: boolean; retryAfterSeconds?: number } {
  const state = attempts.get(userId);
  if (!state?.lockedUntil) return { locked: false };

  const remaining = state.lockedUntil - Date.now();
  if (remaining <= 0) {
    // Cooldown elapsed — clear the lock but keep counting from zero on the
    // next failure.
    attempts.delete(userId);
    return { locked: false };
  }

  return { locked: true, retryAfterSeconds: Math.ceil(remaining / 1000) };
}

export function recordPinFailure(userId: number): void {
  const state = attempts.get(userId) ?? { count: 0, lockedUntil: null };
  state.count += 1;
  if (state.count >= MAX_ATTEMPTS) {
    state.lockedUntil = Date.now() + LOCKOUT_MS;
    state.count = 0;
  }
  attempts.set(userId, state);
}

export function recordPinSuccess(userId: number): void {
  attempts.delete(userId);
}
