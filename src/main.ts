import express from 'express';
import cookieParser from 'cookie-parser';
import { indexHandler } from './handlers/indexHandler';
import { sceneHandler } from './handlers/sceneHandler';
import { pickupItemHandler } from './handlers/pickupItemHandler';
import { navigateHandler } from './handlers/navigateHandler';
import { authMiddleware } from './auth/authMiddleware';
import { getOrCreateSession } from './sessions/getOrCreateSession';

const port = 3001;
const app = express();
app.use(cookieParser());
app.use(authMiddleware);

app.get('/', (request, response) => {
  indexHandler(response, getOrCreateSession(request));
});

app.get('/:sceneId', (request, response) => {
  const { sceneId } = request.params;
  sceneHandler({ sceneId }, response, getOrCreateSession(request));
});

app.get('/:sceneId/item/:item/pickup', (request, response) => {
  const { sceneId, item } = request.params;
  pickupItemHandler({ sceneId, item }, response, getOrCreateSession(request));
});

app.get('/:sceneId/item/:item/drop', (request, response) => {
  const { sceneId, item } = request.params;
  pickupItemHandler({ sceneId, item }, response, getOrCreateSession(request));
});

app.get('/:sceneId/:direction', (request, response) => {
  const { sceneId, direction } = request.params;
  navigateHandler({ sceneId, direction }, response, getOrCreateSession(request));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});