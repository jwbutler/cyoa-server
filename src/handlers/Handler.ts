import express from 'express';
import { Session } from '../sessions/Session';

// Trying to do some typescript magic so that, if we don't care about anything in the request,
// we can just omit it.  So, either
// (response, session) => void
// (request, response, session) => void

type VoidHandler = (response: express.Response, session: Session) => void;
type GenericHandler<T> = (request: T, response: express.Response, session: Session) => void;

export type Handler<T = undefined> = T extends undefined ? VoidHandler : GenericHandler<T>;
