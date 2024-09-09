import { Scene } from '../sessions/Session';
import { SceneId } from './SceneId';

export const OutsideFrontDoor = (): Scene => ({
  id: SceneId.OUTSIDE_FRONT_DOOR,
  name: 'Outside Front Door',
  description: 'You\'re standing outside the front door of a house.  You can go inside or east to the driveway.',
  exits: {
    'in': SceneId.FRONT_HALL,
    'east': SceneId.DRIVEWAY
  },
  items: []
});