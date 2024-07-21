const { createMCServer } = require('flying-squid')

createMCServer({
  'motd': 'A Minecraft Server \nRunning flying-squid',
  'port': 25565,
  'max-players': 10,
  'online-mode': false, // optional: disable online-mode to allow cracked clients to join
  'logging': true,
  'gameMode': 1,
  'generation': {
    'name': 'diamond_square',
    'options': {
      'worldHeight': 80
    }
  },
  'kickTimeout': 10000,
  'plugins': {},
  'modpe': false,
  'view-distance': 10,
  'compression': true,
  'player-list-text': {
    'header': 'Flying Squid',
    'footer': 'Enjoy your stay!'
  },
  'everybody-op': false,
  'max-entities': 100,
  'version': '1.16.5' // specify the Minecraft version
})
