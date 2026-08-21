import type { H3Event } from "h3";
import type { User } from "#auth-utils";

export async function requireUser(event: H3Event): Promise<User> {
  const session = await getUserSession(event);
  if (!session.user) {
    throw createError({ statusCode: 401, statusMessage: "Non authentifié" });
  }
  return session.user;
}

export async function requireRole(event: H3Event, roles: User["role"][]): Promise<User> {
  const user = await requireUser(event);
  if (!roles.includes(user.role)) {
    throw createError({ statusCode: 403, statusMessage: "Accès refusé" });
  }
  return user;
}
