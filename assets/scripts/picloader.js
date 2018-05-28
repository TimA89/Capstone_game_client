
const picCache = {}
const readyCallbacks = []

// Load an image url or an array of image urls
const load = function (urlOrArr) {
  if (urlOrArr instanceof Array) {
    urlOrArr.forEach(function (url) {
      console.log('if load')
      _load(url)
    })
  } else {
    console.log('else load')
    _load(urlOrArr)
  }
}

const _load = function (url) {
  if (picCache[url]) {
    console.log('if _load')
    return picCache[url]
  } else {
    const img = new Image()
    img.onload = function () {
      picCache[url] = img

      if (isReady()) {
        console.log('else if _load')
        readyCallbacks.forEach(function (func) { func() })
      }
    }
    console.log('else _load')
    picCache[url] = false
    img.src = url
  }
}

const isReady = function () {
  let ready = true
  for (const k in picCache) {
    if (picCache.hasOwnProperty(k) &&
             !picCache[k]) {
      ready = false
    }
  }
  console.log('isReady')
  return ready
}

const onReady = function (func) {
  console.log('onReady')
  readyCallbacks.push(func)
}

module.exports = {
  onReady,
  load
}
