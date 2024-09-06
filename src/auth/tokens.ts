import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

export const COOKIE_NAME = 'session_token';

export const getSessionToken = (request: Request): string | null => {
  return request.cookies[COOKIE_NAME] ?? null;
};

export const requireSessionToken = (request: Request): string => {
  const token = getSessionToken(request);
  if (!token) {
    throw new Error();
  }
  return token;
};

export const setSessionToken = (response: Response, sessionToken: string): void => {
  response.cookie(COOKIE_NAME, sessionToken);
};

export const generateSessionToken = (): string => uuidv4();