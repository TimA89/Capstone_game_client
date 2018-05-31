const api = require('./api')

const ui = require('./ui')

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
  onMyAllScores
}
