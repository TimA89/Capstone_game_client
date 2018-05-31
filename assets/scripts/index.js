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
  const picLoader = require('./picloader')
  const alien1 = require('../../img/alien1.png')
  const hero1 = require('../../img/hero1.png')
  const blast = require('../../img/blast.png')
  const explosion1 = require('../../img/explosion1.png')

  picLoader.load([
    alien1,
    hero1,
    blast,
    explosion1
  ])

  authEvents.addHandlers()
  gameEvents.onGetAllScores()
  gameEvents.gameHandlers()
})
