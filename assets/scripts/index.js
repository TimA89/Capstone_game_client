'use strict'

// const app = require('./app')
// app()

const picLoader = require('./picloader')
picLoader.load([
  '../../img/hero1.png',
  '../../img/hero2.png',
  '../../img/alien1.png',
  '../../img/alien2.png',
  '../../img/blast.png',
  '../../img/explosion1.png',
  '../../img/explosion2.png'
])

const game = require('./gamelogic')
picLoader.onReady(game)

$(() => {
  // your JS code goes here
})
