const config = require('../config')

const store = require('../store')

// getAllScores GET request
const getAllScores = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      contentType: 'application/json'
    }
  })
}

const getMyScores = function () {
  return $.ajax({
    url: config.apiUrl + '/users/' + store.user.id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getAllScores,
  getMyScores
}
