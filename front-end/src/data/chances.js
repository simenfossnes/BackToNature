import Birdwatch from '../images/binoculars.jsx'; 
import Bonfire from '../images/bonfire.jsx'; 
import Fishing from '../images/fishes.jsx'; 
import Moon from '../images/moon.jsx'; 
import Aurora from '../images/aurora.jsx'; 
import Pinecone from '../images/pinecone.jsx'; 
import Swim from '../images/swim.jsx'; 
import Tent from '../images/tent.jsx'; 

export const chances = {
    1: {
      id: 1,
      title: 'Northern Lights',
      description: 'Witness a sky lit by the ghostly display of dancing mysticism.',
      backgroundImage: Aurora,
      requirements: [
        {
          type: 'season',
          season: 'winter'
        },
        {
          type: 'weather conditions',
          main: 'clear',
          clouds: {
            min: 0,
            max: 4
          }
        },
        {
          type: 'hour',
          amount: {
            min: 0,
            max: 12
          }
        }
      ],
      locations: [
        {
          lat: 60.334255, 
          lng: 24.502749
        },
        {
          lat: 60.295684,
          lng: 24.565548
        }
      ]
    },
    2: {
      id: 2,
      title: 'Red Moon Rising',
      description: 'Feel the magic of a bleeding moon',
      backgroundImage: Moon,
      requirements: [
        {
          type: 'day',
          day: '2019-11-19'
        },
        {
          type: 'weather conditions',
          main: 'clear',
          clouds: {
            min: 0,
            max: 4
          }
        },
        {
          type: 'hour',
          amount: {
            min: 0,
            max: 12
          }
        }
      ],
      locations: [
        {
          lat: 60.305872, 
          lng: 24.473279
        },
        {
          lat: 60.285466, 
          lng: 24.506056
        }
      ]
    },
    3: {
      id: 3,
      title: 'Salmon fishing',
      description: 'Test your luck and enjoy a day of peace and quiet',
      backgroundImage: Fishing,
      requirements: [],
      locations: [
        {
          lat: 60.302150,
          lng: 24.492166
        },
        {
          lat: 60.304606,
          lng: 24.508131
        }
      ]
    },
    4: {
      id: 4,
      title: 'Bird watching',
      description: 'It\'s the time when juvenile Shags go wnadering and may come say hi.',
      backgroundImage: Birdwatch,
      requirements: [
        {
          type: 'month',
          month: 'november'
        }
      ],
      locations: [
        {
          lat: 60.297587, 
          lng: 24.454655
        }
      ]
    },
    5: {
      id: 5,
      title: 'Go camping',
      description: 'Spend a night under the stars and remember summer joy',
      backgroundImage: Tent,
      requirements: [
        {
          type: 'month',
          month: 'november'
        },
        {
          type: 'precipitation',
          amount: {
            min: 0,
            max: 1
          }
        }
      ],
      locations: [
        {
          lat: 60.278914, 
          lng: 24.476100
        },
        {
          lat: 60.294541, 
          lng: 24.498430
        }
      ]
    },
    6: {
      id: 6,
      title: 'Grill and chill',
      description: 'The nights may get chilly, but that just makes the campfires more cozy',
      backgroundImage: Bonfire,
      requirements: [
        {
          type: 'precipitation',
          amount: {
            min: 0,
            max: 1
          }
        }
      ],
      locations: [
        {
          lat: 60.303071, 
          lng: 24.570213
        },
        {
          lat: 60.306363, 
          lng: 24.473873
        }
      ]
    },
    7: {
      id: 7,
      title: 'Search for pinecones',
      description: 'Whether for arts and crafts or for the seeds, gather your share of pinecones today',
      backgroundImage: Pinecone,
      requirements: [],
      locations: [
        {
          lat: 60.335490, 
          lng: 24.488362
        },
        {
          lat: 60.313708, 
          lng: 24.466388
        }
      ]
    },
    8: {
      id: 8,
      title: 'Skinny dipping in freezing waters',
      description: 'They may call you crazy, but we call you Finnish',
      backgroundImage: Swim,
      requirements: [
        {
          type: 'temperature',
          amount: {
            min: -15,
            max: 0
          }
        }
      ],
      locations: [
        {
          lat: 60.309909, 
          lng: 24.510108
        },
        {
          lat: 60.279817, 
          lng: 24.507042
        }
      ]
    }
};