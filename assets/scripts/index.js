'use strict'

// const app = require('./app')
// app()
const alien1 = require('../../img/alien1.png')
const alien2 = require('../../img/alien2.png')
const hero1 = require('../../img/hero1.png')
const hero2 = require('../../img/hero2.png')
const blast = require('../../img/blast.png')
const explosion1 = require('../../img/explosion1.png')
const explosion2 = require('../../img/explosion2.png')
const picLoader = require('./picloader')
picLoader.load([
  '../../img/hero1.png',
  '../../img/hero2.png',
  '../../img/alien1.png',
  '../../img/alien2.png',
  '../../img/blast.png',
  'http://tima89.github.io/img/alien1.png',
  '../../img/explosion1.png',
  '../../img/explosion2.png',
  alien1,
  alien2,
  hero1,
  hero2,
  blast,
  explosion1,
  explosion2
])

const game = require('./gamelogic')
picLoader.onReady(game)

$(() => {
  // your JS code goes here
})
