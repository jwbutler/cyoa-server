import { Session } from './Session';

export const initSession = (id: string):  Session => ({
  id,
  scenes: [
    {
      id: 'outside_front_door',
      name: 'Outside Front Door',
      description: "You're standing outside the front door of a house.  You can go inside or east to the driveway.",
      exits: {
        'in': 'front_hall',
        'east': 'driveway'
      },
      items: []
    },
    {
      id: 'front_hall',
      name: 'Front Hall',
      description: "You're standing in the front hall of the house.",
      exits: {
        'out': 'outside_front_door',
        'east': 'kitchen',
      },
      items: []
    },
    {
      id: 'downstairs_bathroom',
      name: 'Downstairs Bathroom',
      description: "You're in the downstairs bathroom, next to the front hall.",
      exits: {
        'out': 'front_hall'
      },
      items: []
    },
    {
      id: 'kitchen',
      name: 'Kitchen',
      description: "You're in the kitchen.  There's a refrigerator, stove, and a dining table.",
      exits: {
        'out': 'outside_back_door',
        'west': 'front_hall'
      },
      items: []
    },
    {
      id: 'outside_back_door',
      name: 'Outside Back Door',
      description: "You're on the back steps, outside the kitchen and facing the driveway.",
      exits: {
        'in': 'kitchen',
        'east': 'driveway'
      },
      items: []
    },
    {
      id: 'driveway',
      name: 'Driveway',
      description: "You're standing on the driveway.  You can go inside to the kitchen or north to the front door.",
      exits: {
        'in': 'kitchen',
        'north': 'outside_front_door'
      },
      items: []
    }
  ],
  startingSceneId: 'outside_front_door',
  currentSceneId: 'outside_front_door',
  items: []
});