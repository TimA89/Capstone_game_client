'use strict'

// event handlers for users actions
const authEvents = require('./user-actions/events')

// event handlers for game api's
const gameEvents = require('./game-actions/events')

// require('./inputP')

// setup for homepage
$('.a-sign-up').show()
$('.a-sign-in').show()
$('.gameimg').show()
$('.personalcscore').hide()
$('.section-game').hide()
$('.sign-out').hide()
$('.a-change-pass').hide()
$(() => {
  authEvents.addHandlers()
  gameEvents.onGetAllScores()
  gameEvents.gameHandlers()
})
