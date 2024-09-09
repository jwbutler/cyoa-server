import { Scene } from '../sessions/Session';
import { SceneId } from './SceneId';

export const Kitchen = (): Scene => ({
  id: SceneId.KITCHEN,
  name: 'Kitchen',
  description: 'You\'re in the kitchen.  There\'s a refrigerator, stove, and a dining table.',
  exits: {
    'out': SceneId.OUTSIDE_BACK_DOOR,
    'west': SceneId.FRONT_HALL
  },
  items: ['knife']
});