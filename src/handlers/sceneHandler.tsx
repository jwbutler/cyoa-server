import { renderToStaticMarkup } from 'react-dom/server';
import { SceneView } from '../components/SceneView';
import { Handler } from './Handler';

type Props = Readonly<{
  sceneId: string
}>;

export const sceneHandler: Handler<Props> = ({ sceneId }, response, session) => {
  if (sceneId !== session.currentSceneId) {
    response.status(400).send();
    return;
  }

  const scene = session.scenes.find(s => s.id === sceneId);
  if (!scene) {
    response.status(400).send();
    return;
  }

  const view = <SceneView scene={scene} session={session} />;
  const content = renderToStaticMarkup(view);
  response.send(content);
};