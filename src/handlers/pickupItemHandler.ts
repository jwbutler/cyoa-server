import { Handler } from './Handler';

type Request = Readonly<{
  sceneId: string,
  item: string
}>;

export const pickupItemHandler: Handler<Request> = ({ sceneId, item }, response, session) => { 
  const scene = session.scenes.find(s => s.id === sceneId);
  if (!scene) {
    response.status(400).send();
    return;
  }
  if (!scene.items.includes(item)) {
    response.status(400).send();
    return;
  }
  scene.items.splice(scene.items.indexOf(item, 1));
  session.items.push(item);
  response.redirect(`/${sceneId}`);
};