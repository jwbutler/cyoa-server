import { Request } from 'express';
import { Session } from './Session';
import { requireSessionToken } from '../auth/tokens';
import { sessionStore } from './SessionStore';
import { initSession } from './initSession';

export const getOrCreateSession = (request: Request): Session => {
  const sessionToken = requireSessionToken(request);
  const session = sessionStore.getSession(sessionToken);
  if (session) {
    return session;
  } else {
    const newSession = initSession(sessionToken);
    sessionStore.addSession(newSession);
    return newSession;
  }
};