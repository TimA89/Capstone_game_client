// $('#message').html(`<div class="alert alert-danger" role="alert">You have failed sign in!</div>`)
const store = require('../store')

// const showNotesTemplate = require('./templates/note-listing.handlebars')

// const showMyNotesTemplate = require('./templates/my-note-listing.handlebars')

// const eve = require('./events.js')
// const api = require('./api.js')

const signUpSuccess = (data) => {
  $('#modal1').modal('toggle')
  $('#message').html(`<div class="alert alert-success" role="alert">Welcome to Space Blast!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => $('#message').html(''), 3000)
}

const signUpFailure = () => {
  setTimeout(() => $('.failedmessage1').text('Failed to Sign Up'), 300)
  $('.failedmessage1').css('text-align', 'center')
}

const signInSuccess = (data) => {
  $('#modal2').modal('hide')
  $('#message').html(`<div class="alert alert-success" role="alert">Welcome to Space Blast!</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => $('#message').html(''), 3000)
  store.user = data.user
  $('.a-sign-up').hide()
  $('.a-sign-in').hide()
  $('.gameimg').hide()
  $('.sign-out').show()
  $('.a-change-pass').show()
  $('.personalcscore').show()
}

const signInFailure = () => {
  $('.failedmessage2').text('Failed to Sign In')
  $('.failedmessage2').css('text-align', 'center')
  setTimeout(() => $('.failedmessage2').html(''), 3000)
}

const changePWSuccess = () => {
  $('#modal3').modal('toggle')
  $('#message').html(`<div class="alert alert-success" role="alert">Password was changed succesfully</div>`)
  $('#message').css('text-align', 'center')
  $('form').trigger('reset')
  setTimeout(() => $('#message').html(''), 3000)
}

const changePWFailure = () => {
  $('.failedmessage3').text('Failed to Change Password')
  $('.failedmessage3').css('text-align', 'center')
  setTimeout(() => $('.failedmessage3').html(''), 3000)
}

const signOutSuccess = () => {
  $('#message').html(`<div class="alert alert-success" role="alert">Thank you for playing! Come back soon</div>`)
  $('#message').css('text-align', 'center')
  setTimeout(() => $('#message').html(''), 4000)
  $('.a-sign-up').show()
  $('.a-sign-in').show()
  $('.gameimg').show()
  $('.personalcscore').hide()
  $('.sign-out').hide()
  $('.a-change-pass').hide()
  $('.failedmessage1').text('')
  $('.failedmessage2').text('')
  store.user = null
}

const signOutFailure = () => {
  $('#message').html(`<div class="alert alert-danger" role="alert">Failed to Sign Out</div>`)
  $('#message').css('text-align', 'center')
  setTimeout(() => $('#message').html(''), 3000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePWSuccess,
  changePWFailure,
  signOutSuccess,
  signOutFailure
}