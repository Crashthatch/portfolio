// ------------------------------------
// Reducer
// ------------------------------------
const initialState = [

  {
    name: 'Blispa Event App Framework',
    year: '2015 - 2016',
    description: 'iBeacon powered festival & events platform - customisable & skinnable. App downloaded over 10,000 times. iBeacon games and analytics.',
    image: '/blispa.png',
    video: 'https://www.youtube.com/watch?v=P4Upswb3KtA',
    url: 'https://blispa.com',
    skills: ['Ionic', 'Angular', 'Android', 'iOS', 'Cordova', 'iBeacon', 'AWS']
  },
  {
    name: 'Ráiteas',
    year: '2013 - 2014',
    description: 'Parses SQL log files to determine & show database structure using D3. Interactive, scrollable, filterable, etc.',
    image: 'raiteas.png',
    skills: ['Javascript', 'node.js', 'Python', 'Angular', 'D3', 'PostgreSQL', 'REST API', 'AWS', 'OpsWorks']
  },
  {
    name: 'BotBy.Me',
    year: '2011 - 2012',
    description: 'A Pinterest like "social collections" site populated by monitoring your email inbox for receipts. Order & delivery tracking.',
    image: '/botby.png',
    skills: ['PHP', 'Symfony', 'MySQL', 'Masonry', 'Gearman', 'oAuth']
  },
  {
    name: 'TrustCloud',
    year: '2010 - 2013',
    description: 'A portable feedback score for the sharing economy. Connect accounts and earn trust so you don\'t have to start from 0 when you join a new site.',
    image: '/trustcloud.png',
    skills: ['PHP', 'REST API', 'Facebook API', 'Gearman', 'AWS', 'MySQL', 'oAuth']
  },
  {
    name: 'Friend Wheel',
    year: '2008 - 2013',
    description: 'A colourful visualization of your Facebook friend graph. Groups cliques together. Used by millions.',
    image: '/friendwheel.png',
    skills: ['PHP', 'GD', 'MySQL', 'EC2', 'Facebook Graph API', 'REST API', 'oAuth']
  },
  {
    name: 'Squares Game',
    year: '2006',
    description: 'A multiplayer browser-based game- click on squares to earn credits, use them to capture other player\'s squares.',
    image: '/squares-game.png',
    skills: ['PHP', 'Cookies', 'MySQL']
  },
  {
    name: 'LegendQuest',
    description: 'Browser-based MMORPG. ',
    year: 2005,
    image: '/legendquest.png',
    skills: ['PHP', 'MySQL']
  },
];
export default function projectReducer (state = initialState, action) {
  return state; //This state (the list of projects) never changes. We start with initial state, then never alter it.
}
