import { Session } from './Session';

export const validateSceneGraph = (session: Session) => {
  const sceneIds = new Set(session.scenes.map(scene => scene.id));
  for (const scene of session.scenes) {
    for (const toSceneId of Object.values(scene.exits)) {
      if (!sceneIds.has(toSceneId)) {
        throw new Error();
      }
    }
  }
  if (!sceneIds.has(session.startingSceneId)) {
    throw new Error();
  }
  if (!sceneIds.has(session.currentSceneId)) {
    throw new Error();
  }
};