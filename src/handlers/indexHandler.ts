import { Handler } from './Handler';

export const indexHandler: Handler = (response, session) => {
  const sceneId = session.startingSceneId;
  response.redirect(`/${sceneId}`);
};