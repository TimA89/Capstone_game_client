const api = require('./api')

const ui = require('./ui')

// gamelogic file
const game = require('../gamelogic')

// starting a game
const onGetStart = () => {
  api.getStart()
    .then(ui.getStartSuccess)
    .then(() => game.start())
    .catch(ui.getStartFailure)
}

const pauseGame = () => {
  game.togglePause()
}
// event handling function
const gameHandlers = () => {
  $('.start').on('click', onGetStart)
  $('#pause').on('click', pauseGame)
}

module.exports = {
  gameHandlers
}
