const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')

const ui = require('./ui')

// const gameEvents = require('../game-actions/events')

const gameUpdateEvents = require('../game-actions/update_events')

const game = require('../gamelogic')

// events for signUp that creates new user and signs you in
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    // // runs onAutoSignIn as promise
    .then(() => onAutoSignIn(data))
    .catch(ui.signUpFailure)
}

// sign's you in after sign up and changes view to signed in user
const onAutoSignIn = function (data) {
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(() => gameUpdateEvents.onGetAllScores())
    .then(() => gameUpdateEvents.onMyAllScores())
    .catch(ui.signInFailure)
}

// sign's you in and changes view to signed in user
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(() => gameUpdateEvents.onGetAllScores())
    .then(() => gameUpdateEvents.onMyAllScores())
    .catch(ui.signInFailure)
}

// sign out event changes view to a not signed user
const onSignOut = function (event) {
  event.preventDefault()
  game.reset()
  game.togglePause()
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// event for changing password that makes api request and send new password to db
const onChangePW = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePW(data)
    .then(ui.changePWSuccess)
    .catch(ui.changePWFailure)
}

// event handling function
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('.sign-out').on('click', onSignOut)
  $('#change_pass').on('submit', onChangePW)
}

module.exports = {
  addHandlers
}
