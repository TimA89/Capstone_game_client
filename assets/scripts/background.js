// A cross-browser requestAnimationFrame
// See https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
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
// Create the canvas
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.appendChild(canvas)
//

const Star = function strokeStar (x, y, r, n, inset) {
  this.x = x
  this.y = y
  this.r = r
  this.n = n
  this.inset = inset
  ctx.save()
  ctx.beginPath()
  ctx.translate(this.x, this.y)
  ctx.moveTo(0, 0 - this.r)
  for (let i = 0; i < n; i++) {
    ctx.rotate(Math.PI / this.n)
    ctx.lineTo(0, 0 - (this.r * this.inset))
    ctx.rotate(Math.PI / this.n)
    ctx.lineTo(0, 0 - this.r)
  }
  ctx.closePath()
  ctx.fill()
  ctx.restore()
}

const starArray = []
// // for loop to create 100 circles
for (let i = 0; i < 100; i++) {
  // original x,y Math.random() * innerWidth
  // we need to take diametr away and add radius
  // change color of circles
  const x = Math.random() * (innerWidth)
  const y = Math.random() * (innerHeight)
  // const radius = 30
  starArray.push(new Star(x, y, dx, dy))
  // we are still not able to draw circles, cause we need to add
  // a for loop in animate function
}
//
function animate () {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, innerWidth, innerHeight)
}
animate()
