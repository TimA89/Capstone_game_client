let pressedKeys = {}
// ties together keyCode of button with keys that pressed during game
function setKey (event, status) {
  // each button on keypad has a number .keyCode gets that number
  const code = event.keyCode
  let key
  // checks which key is pressed
  if (code === 32) {
    key = 'SPACE'
  } else if (code === 37) {
    key = 'LEFT'
  } else if (code === 38) {
    key = 'UP'
  } else if (code === 39) {
    key = 'RIGHT'
  } else if (code === 40) {
    key = 'DOWN'
  } else {
    key = String.fromCharCode(code)
  }
  pressedKeys[key] = status
}
// arrows would follow a proper direction when keydown is true and keyup false
document.addEventListener('keydown', function (e) {
  setKey(e, true)
})
document.addEventListener('keyup', function (e) {
  setKey(e, false)
})
// if elene==ment lost focus we need to use 'blur'
window.addEventListener('blur', function () {
  pressedKeys = {}
})

module.exports = {
  isDown: function (key) {
    return pressedKeys[key.toUpperCase()]
  }
}
