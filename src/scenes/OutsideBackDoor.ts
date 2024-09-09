import { Scene } from '../sessions/Session';
import { SceneId } from './SceneId';

export const OutsideBackDoor = (): Scene => ({
  id: SceneId.OUTSIDE_BACK_DOOR,
  name: 'Outside Back Door',
  description: 'You\'re on the back steps, outside the kitchen and facing the driveway.',
  exits: {
    'in': SceneId.KITCHEN,
    'east': SceneId.DRIVEWAY
  },
  items: []
});