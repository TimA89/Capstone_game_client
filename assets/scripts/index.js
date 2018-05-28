'use strict'

// requiring off all pix
const alien1 = require('../../img/alien1.png')
const alien2 = require('../../img/alien2.png')
const hero1 = require('../../img/hero1.png')
const hero2 = require('../../img/hero2.png')
const blast = require('../../img/blast.png')
const explosion1 = require('../../img/explosion1.png')
const explosion2 = require('../../img/explosion2.png')
const picLoader = require('./picloader')

// preloading all images in cookie so we can reuse them during fast frames changes
picLoader.load([
  alien1,
  alien2,
  hero1,
  hero2,
  blast,
  explosion1,
  explosion2
])

// when all pix loaded starting game
const game = require('./gamelogic')
picLoader.onReady(game)

$(() => {
  // your JS code goes here
})
