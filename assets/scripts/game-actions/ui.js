// $('#message').html(`<div class="alert alert-danger" role="alert">You have failed sign in!</div>`)
const store = require('../store')

const showAllScoresTemplate = require('../templates/publicscore.handlebars')

const showMyScoresTemplate = require('../templates/myscore.handlebars')

// const showMyNotesTemplate = require('./templates/my-note-listing.handlebars')

// const eve = require('./events.js')
// const api = require('./api.js')

const getAllScoresSuccess = (data) => {
  store.games = data.games
  const showAllScoresHtml = showAllScoresTemplate({
    games: store.games.sort(function (a, b) {
      return b.score - a.score
    }) })
  $('.publicscore').html(showAllScoresHtml)
}

const getAllScoresFailure = () => {
  $('#message').html(`<div class="alert alert-danger" role="alert">Welcome to Space Blast!</div>`)
  $('#message').css('text-align', 'center')
}

const getMyScoresSuccess = (data) => {
  console.log(data)
  // store.games = data.user.games
  const showMyScoresHtml = showMyScoresTemplate({
    games: data.user.games.sort(function (a, b) {
      return b.score - a.score
    }) })
  $('.personalcscore').html(showMyScoresHtml)
}

const getMyScoresFailure = () => {
  $('#message').html(`<div class="alert alert-danger" role="alert">Welcome to Space Blast!</div>`)
  $('#message').css('text-align', 'center')
}

module.exports = {
  getAllScoresSuccess,
  getAllScoresFailure,
  getMyScoresSuccess,
  getMyScoresFailure
}
