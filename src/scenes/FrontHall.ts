import { Scene } from '../sessions/Session';
import { SceneId } from './SceneId';

export const FrontHall = (): Scene => ({
  id: SceneId.FRONT_HALL,
  name: 'Front Hall',
  description: 'You\'re standing in the front hall of the house.',
  exits: {
    'out': SceneId.OUTSIDE_FRONT_DOOR,
    'east': SceneId.KITCHEN
  },
  items: []
});