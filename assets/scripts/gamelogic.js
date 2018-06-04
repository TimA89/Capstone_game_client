'use strict'

// require event listener for keys
const input = require('./input')

// require event listener for keys
// const api = require('./game-actions/api')

// require event listener for keys
// const ui = require('./game-actions/ui')

// require event handlers
const gameUpdateEvents = require('./game-actions/update_events')

// require all pictures
const alien1 = require('../../img/alien1.png')
// const alien2 = require('../../img/alien2.png')
const mike = require('../../img/mike.png')
const hero1 = require('../../img/hero1.png')
// const hero2 = require('../../img/hero2.png')
const blast = require('../../img/blast.png')
const explosion1 = require('../../img/explosion1.png')
// const explosion2 = require('../../img/explosion2.png')

// -----------------------------------------------------------
const canvas = document.getElementById('canvas')
// getContext - identifies type if drawwing 2d- is  value 2-dimensional
// Now we have the 2D rendering context for a canvas and we can draw within it.
const ctx = canvas.getContext('2d')

// -----------------------------------------------------------
// cross browser that we are going to run a function for animation
const requestAnimationFrame = (function () {
  return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          // runs animation after specified time
          window.setTimeout(callback, 1000 / 60)
        }
})()
// -----------------------------------------------------------
// sizing of a game field
canvas.width = 500
canvas.height = 500
// -----------------------------------------------------------

// -----------------------------------------------------------
let timeOfGame = 0
let lastFire = Date.now()
let posX = canvas.width / 2
let posY = 440
const heroWidth = 60
const heroHeight = 60
const heroSpeed = 2
let bullets = []
const bulletWidth = 10
const bulletHeight = 20
const bulletSpeed = 8
let enemy = []
const enemyWidth = 50
const enemyHeight = 50
const enemySpeed = 1

const gameData = {
  score: 0,
  over: false
}

const explosions = []
const explosionWidth = 40
const explosionHeight = 40

const handleInput = function () {
  if (input.isDown('DOWN') || input.isDown('s')) {
    posY += heroSpeed
  }

  if (input.isDown('UP') || input.isDown('w')) {
    posY -= heroSpeed
  }

  if (input.isDown('LEFT') || input.isDown('a')) {
    posX -= heroSpeed
  }

  if (input.isDown('RIGHT') || input.isDown('d')) {
    posX += heroSpeed
  }

  // if (input.isDown('p')) {
  //   togglePause()
  // }

  if (input.isDown('f') && Date.now() - lastFire > 100) {
    const bulletPosX = posX + heroWidth / 2
    const bulletPosY = posY
    bullets.push(new Bullet(bulletPosX, bulletPosY))
    // filters all bullets that have been added to array, instead of 100 per second only 10 added
    lastFire = Date.now()
  }

  // if (input.isDown('SPACE') && Date.now() - lastFire > 100) {
  //   const bulletPosX = posX + heroWidth / 2
  //   const bulletPosY = posY
  //   bullets.push(new Bullet(bulletPosX, bulletPosY))
  //   // filters all bullets that have been added to array, instead of 100 per second only 10 added
  //   lastFire = Date.now()
  // }
}

const hero = function () {
  const heroLook = new Image()
  heroLook.src = hero1
  ctx.drawImage(heroLook, posX, posY, heroWidth, heroHeight)
  // event listener for keys pressed
  // hero position
  const border = function () {
    if (posX + heroWidth > canvas.width) {
      posX = canvas.width - heroWidth
    } else if (posX < 0) {
      posX = 0
    }
    if (posY + heroHeight > canvas.height) {
      posY = canvas.height - heroHeight
    } else if (posY < 0) {
      posY = 0
    }
  }
  border()
}

const Bullet = function (x, y) {
  this.x = x
  this.y = y

  this.draw = function () {
    const bulletLook = new Image()
    bulletLook.src = blast
    ctx.drawImage(bulletLook, this.x, this.y, bulletWidth, bulletHeight)
  }

  this.updatePos = function () {
    this.y -= bulletSpeed
    this.draw()
  }
}

const Enemy = function (x, y) {
  this.x = x
  this.y = y

  this.draw = function () {
    const enemyLook = new Image()
    enemyLook.src = mike
    ctx.drawImage(enemyLook, this.x, this.y, enemyWidth, enemyHeight)
  }

  this.updatePos = function () {
    this.y += enemySpeed
    this.draw()
  }
}

const Explosion = function (x, y, index) {
  this.x = x
  this.y = y

  this.draw = function () {
    const explosionLook = new Image()
    explosionLook.src = explosion1
    ctx.drawImage(explosionLook, this.x, this.y, explosionWidth, explosionHeight)
  }

  this.updatePos = function () {
    this.draw()
    // Remove if animation is done
  }
}

const render = function () {
  // clears a content after movement
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  handleInput()
  updateEntities()
}

const enemies = function () {
  timeOfGame += 0.015
  if (Math.random() < 1 - Math.pow(0.993, timeOfGame)) {
    const enemyX = Math.random() * canvas.width
    if (enemyX > 0 && enemyX < canvas.width - enemyWidth) {
      enemy.push(new Enemy(enemyX, -enemyHeight))
    }
  }
}

const updateEntities = function () {
  // lopping thru all bullets in array and
  for (let i = 0; i < bullets.length; i++) {
    // updating position of bullet
    bullets[i].updatePos()
    // deliting bullet from array if location is outside of field
    if (bullets[i].y < 0) {
      bullets.splice(i, 1)
      i--
    }
  }
  for (let i = 0; i < enemy.length; i++) {
    enemy[i].updatePos()
    if (enemy.y > canvas.height) {
      enemy.splice(i, 1)
      i--
    }
  }
}
// explaining collision conditions
const collides = function (r1, r2) {
  return !(r1.x + r1.w <= r2.x ||
           r2.x + r2.w < r1.x ||
           r1.y + r1.h <= r2.y ||
           r2.y + r2.h < r1.y)
}

// checking for collisions
const checkCollisions = function () {
  // looping thru all enemy
  for (let i = 0; i < enemy.length; i++) {
    // checking for collisions with hero
    if (collides({
      x: enemy[i].x,
      y: enemy[i].y,
      w: enemyWidth,
      h: enemyHeight
    }, {
      x: posX,
      y: posY,
      w: heroWidth,
      h: heroHeight
    })) {
      gameOver()
      break
    }
    // looping thru all bullets array indexes
    for (let k = 0; k < bullets.length; k++) {
      // calling collision check on each bullet and enemy
      if (collides({
        x: enemy[i].x,
        y: enemy[i].y,
        w: enemyWidth,
        h: enemyHeight
      }, {
        x: bullets[k].x,
        y: bullets[k].y,
        w: bulletWidth,
        h: bulletHeight
      })) {
        // showing explosions when collision is true
        explosions.push(new Explosion(enemy[i].x, enemy[i].y))
        // removing enemies
        enemy.splice(i, 1)
        i--
        // removing bullets
        bullets.splice(k, 1)
        k--
        // updating score
        gameData.score += 100

        break
      }
    }
  }
}

let pause = false

const togglePause = function () {
  pause = !pause
  if (!pause) {
    game()
  }
}

// main loop of the game
const game = function () {
  if (!pause) {
    // creates a loop for animation
    enemies()
    render()
    hero()

    requestAnimationFrame(game)
    checkCollisions()
    for (let i = 0; i < explosions.length; i++) {
      explosions[i].draw()
      setTimeout(function () { explosions.splice(0, 1) }, 1000 / 10)
    }
    $('#score').text(gameData.score)
  }
}
// starting game
const start = function () {
  reset()
  game()
}

// game over events
const gameOver = function () {
  pause = true
  gameData.over = true
  gameUpdateEvents.onGetUpdate(gameData)
}

const reset = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  pause = false
  gameData.score = 0
  gameData.over = false
  timeOfGame = 0
  enemy = []
  bullets = []
  posX = canvas.width / 2
  posY = 440
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

module.exports = {
  start,
  togglePause,
  gameData,
  reset,
  pause
}
