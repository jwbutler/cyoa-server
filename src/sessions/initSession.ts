import { Session } from './Session';

export const initSession = (id: string):  Session => ({
  id,
  scenes: [
    {
      id: 'outside_the_house',
      name: 'Outside the House',
      description: "You're standing outside a house.",
      exits: {
        'in': 'front_hall'
      },
      items: []
    },
    {
      id: 'front_hall',
      name: 'Front Hall',
      description: "You're standing in the front hall of the house.",
      exits: {
        'out': 'outside_the_house'
      },
      items: ['axe']
    }
  ],
  startingSceneId: 'outside_the_house',
  currentSceneId: 'outside_the_house',
  items: []
});