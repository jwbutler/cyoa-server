import { Scene } from '../sessions/Session';
import { SceneId } from './SceneId';

export const DownstairsBathroom = (): Scene => ({
  id: SceneId.DOWNSTAIRS_BATHROOM,
  name: 'Downstairs Bathroom',
  description: 'You\'re in the downstairs bathroom, next to the front hall.',
  exits: {
    'out': SceneId.FRONT_HALL
  },
  items: []
});