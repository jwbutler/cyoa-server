import { Scene } from '../sessions/Session';
import { SceneId } from './SceneId';

export const Driveway = (): Scene => ({
  id: SceneId.DRIVEWAY,
  name: 'Driveway',
  description: 'You\'re standing on the driveway.  You can go inside to the kitchen or north to the front door.',
  exits: {
    'in': SceneId.KITCHEN,
    'north': SceneId.OUTSIDE_FRONT_DOOR
  },
  items: []
});