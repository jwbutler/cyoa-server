import { Handler } from './Handler';

type Request = Readonly<{
  sceneId: string,
  direction: string
}>;

export const navigateHandler: Handler<Request> = ({ sceneId, direction }, response, session) => {
  const scene = session.scenes.find(s => s.id === sceneId);
  if (!scene) {
    response.status(400).send();
    return;
  }
  const toSceneId = scene.exits[direction];
  if (!toSceneId) {
    response.status(400).send();
    return;
  }
  session.currentSceneId = toSceneId;
  response.redirect(`/${toSceneId}`);
};