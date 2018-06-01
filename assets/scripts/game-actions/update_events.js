const api = require('./api')

const ui = require('./ui')

// gamelogic file
// const game = require('../gamelogic')

// updating a game
const onGetUpdate = (gameData) => {
  api.gameUpdate(gameData)
    .then(ui.gameUpdateSuccess)
    .then(() => onGetAllScores())
    .then(() => onMyAllScores())
    .catch(ui.gameUpdateFailure)
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

module.exports = {
  onGetAllScores,
  onMyAllScores,
  onGetUpdate
}
