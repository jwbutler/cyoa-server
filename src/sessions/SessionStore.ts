import { Session } from './Session';
import { Request } from 'express';
import { requireSessionToken } from '../auth/tokens';

export class SessionStore {
  private readonly sessions: Record<string, Session>;
  
  constructor() {
    this.sessions = {};
  }
  
  addSession = (session: Session) => {
    this.sessions[session.id] = session;
  };
  
  getSession = (id: string): Session | null => this.sessions[id] ?? null;
  
  getRequestSession = (request: Request): Session => {
    const sessionToken = requireSessionToken(request);
    return this.sessions[sessionToken];
  };
}

export const sessionStore = new SessionStore();

