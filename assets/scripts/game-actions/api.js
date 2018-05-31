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

const getStart = function () {
  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'score': 0,
        'over': false
      }
    }
  })
}

const gameUpdate = function (gameData) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'score': gameData.score,
        'over': gameData.over
      }
    }
  })
}

module.exports = {
  getAllScores,
  getMyScores,
  getStart,
  gameUpdate
}
