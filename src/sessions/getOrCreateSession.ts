import express from 'express';
import { Session } from './Session';
import { requireSessionToken } from '../auth/tokens';
import { sessionStore } from './SessionStore';
import { initSession } from './initSession';
import { validateSceneGraph } from './validateSceneGraph';

export const getOrCreateSession = (request: express.Request): Session => {
  const sessionToken = requireSessionToken(request);
  const session = sessionStore.getSession(sessionToken);
  if (session) {
    return session;
  } else {
    const newSession = initSession(sessionToken);
    validateSceneGraph(newSession);
    sessionStore.addSession(newSession);
    return newSession;
  }
};