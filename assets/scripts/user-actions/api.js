const config = require('../config')

const store = require('../store')

// signUp POST request
const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

// signIn POST request
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

// signOut DELETE request
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out/', // + store.user.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// changePW PATCH request
const changePW = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password/', // + store.user.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePW
}
