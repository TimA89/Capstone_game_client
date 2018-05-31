const api = require('./api')

const ui = require('./ui')

// gamelogic file
const game = require('../gamelogic')

// require pic loader
const picLoader = require('../picloader')

const alien1 = require('../../../img/alien1.png')
const hero1 = require('../../../img/hero1.png')
const blast = require('../../../img/blast.png')
const explosion1 = require('../../../img/explosion1.png')

const start = function () {
  console.log('startOutter')
  // loading pix
  picLoader.load([
    alien1,
    hero1,
    blast,
    explosion1
  ])
  picLoader.onReady(game.start)
}

// getting all public high scores
const onGetAllScores = () => {
  api.getAllScores()
    .then(ui.getAllScoresSuccess)
    .catch(ui.getAllScoresFailure)
}

// getting all scores that belongs to user
const onMyAllScores = () => {
  api.getMyScores()
    .then(ui.getMyScoresSuccess)
    .catch(ui.getMyScoresFailure)
}

const onGetStart = () => {
  api.getStart()
    .then(ui.getStartSuccess)
    .then(() => start())
    .catch(ui.getStartFailure)
}

// event handling function
const gameHandlers = () => {
  $('.start').on('click', onGetStart)
  $('#pause').on('click', game.togglePause)
}

module.exports = {
  onGetAllScores,
  onMyAllScores,
  gameHandlers
}
