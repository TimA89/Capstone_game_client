'use strict'

// const app = require('./app')
// app()
require('../../img/alien1.png')
require('../../img/alien2.png')
require('../../img/hero1.png')
require('../../img/hero2.png')
require('../../img/blast.png')
require('../../img/explosion1.png')
require('../../img/explosion2.png')
const picLoader = require('./picloader')
picLoader.load([
  '../../img/hero1.png',
  '../../img/hero2.png',
  '../../img/alien1.png',
  '../../img/alien2.png',
  '../../img/blast.png',
  'http://tima89.github.io/img/alien1.png',
  '../../img/explosion1.png',
  '../../img/explosion2.png'
])

const game = require('./gamelogic')
picLoader.onReady(game)

$(() => {
  // your JS code goes here
})
