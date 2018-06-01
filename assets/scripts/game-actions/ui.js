// $('#message').html(`<div class="alert alert-danger" role="alert">You have failed sign in!</div>`)
const store = require('../store')

// handlebars to display scores
const showAllScoresTemplate = require('../templates/publicscore.handlebars')

const showMyScoresTemplate = require('../templates/myscore.handlebars')

// gamelogic file
// const game = require('../gamelogic')

const getAllScoresSuccess = (data) => {
  // store.games = data.games
  const showAllScoresHtml = showAllScoresTemplate({
    games: data.games.sort(function (a, b) {
      return b.score - a.score
    }) })
  $('.publicscore').html(showAllScoresHtml)
}

const getAllScoresFailure = () => {
  $('#message').html(`<div class="alert alert-danger" role="alert">Public scores are not available at the momnent!</div>`)
  $('#message').css('text-align', 'center')
}

const getMyScoresSuccess = (data) => {
  // store.games = data.user.games
  const showMyScoresHtml = showMyScoresTemplate({
    games: data.user.games.sort(function (a, b) {
      return b.score - a.score
    }) })
  $('.personalcscore').html(showMyScoresHtml)
}

const getMyScoresFailure = () => {
  $('#message').html(`<div class="alert alert-danger" role="alert">Your scores are not available at the momnent!</div>`)
  $('#message').css('text-align', 'center')
}

const getStartSuccess = (data) => {
  store.game = data.game
  $('#start-game').hide()
  $('#game-overlay').hide()
  $('#game-over').hide()
  $('#message').html(`<div class="alert alert-success" role="alert">Good Luck!</div>`)
  $('#message').css('text-align', 'center')
  setTimeout(() => $('#message').html(''), 3000)
}

const getStartFailure = () => {
  $('#message').html(`<div class="alert alert-danger" role="alert">Something went wrong. Our team is working on fixing the issue</div>`)
  $('#message').css('text-align', 'center')
  setTimeout(() => $('#message').html(''), 3000)
}

const gameUpdateSuccess = () => {
  $('#message').html(`<div class="alert alert-success" role="alert">Grest Job! Try Again</div>`)
  $('#message').css('text-align', 'center')
  setTimeout(() => $('#message').html(''), 3000)
  $('#game-overlay').show()
  $('#game-over').show()
}

const gameUpdateFailure = () => {
  $('#message').html(`<div class="alert alert-danger" role="alert">Something went wrong. Our team is working on fixing the issue</div>`)
  $('#message').css('text-align', 'center')
  setTimeout(() => $('#message').html(''), 3000)
}

// const pauseGameSuccess = () => {
//   $('#message').html(`<div class="alert alert-success" role="alert">Paused</div>`)
//   $('#message').css('text-align', 'center')
//   setTimeout(() => $('#message').html(''), 3000)
// }
//
// const pauseGameFailure = () => {
//   $('#message').html(`<div class="alert alert-danger" role="alert">Something went wrong. Our team is working on fixing the issue</div>`)
//   $('#message').css('text-align', 'center')
//   setTimeout(() => $('#message').html(''), 3000)
// }

module.exports = {
  getAllScoresSuccess,
  getAllScoresFailure,
  getMyScoresSuccess,
  getMyScoresFailure,
  getStartSuccess,
  getStartFailure,
  gameUpdateSuccess,
  gameUpdateFailure
  // pauseGameSuccess,
  // pauseGameFailure
}
