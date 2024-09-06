import { NextFunction, Request, Response } from 'express';
import { generateSessionToken, getSessionToken, setSessionToken } from './tokens';

export const authMiddleware = (request: Request, response: Response, next: NextFunction) => {
  const sessionToken = getSessionToken(request);
  if (sessionToken) {
    next();
  } else {
    setSessionToken(response, generateSessionToken());
    response.redirect(request.url);
  }
};
