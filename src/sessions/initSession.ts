import { Session } from './Session';
import { OutsideFrontDoor } from '../scenes/OutsideFrontDoor';
import { SceneId } from '../scenes/SceneId';
import { FrontHall } from '../scenes/FrontHall';
import { DownstairsBathroom } from '../scenes/DownstairsBathroom';
import { Kitchen } from '../scenes/Kitchen';
import { OutsideBackDoor } from '../scenes/OutsideBackDoor';
import { Driveway } from '../scenes/Driveway';

export const initSession = (id: string): Session => ({
  id,
  scenes: [
    OutsideFrontDoor(),
    FrontHall(),
    DownstairsBathroom(),
    Kitchen(),
    OutsideBackDoor(),
    Driveway()
  ],
  startingSceneId: SceneId.OUTSIDE_FRONT_DOOR,
  currentSceneId: SceneId.OUTSIDE_FRONT_DOOR,
  items: []
});