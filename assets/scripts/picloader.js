
const picCache = {}
const loading = []
const readyCallbacks = []

// Load an image url or an array of image urls
const load = function (urlOrArr) {
  if (urlOrArr instanceof Array) {
    urlOrArr.forEach(function (url) {
      _load(url)
    })
  } else {
    _load(urlOrArr)
  }
}

const _load = function (url) {
  if (picCache[url]) {
    return picCache[url]
  } else {
    const img = new Image()
    img.onload = function () {
      picCache[url] = img

      if (isReady()) {
        readyCallbacks.forEach(function (func) { func() })
      }
    }
    picCache[url] = false
    img.src = url
  }
}

const get = function (url) {
  return picCache[url]
}

const isReady = function () {
  let ready = true
  for (const k in picCache) {
    if (picCache.hasOwnProperty(k) &&
             !picCache[k]) {
      ready = false
    }
  }
  return ready
}

const onReady = function (func) {
  console.log('ready')
  readyCallbacks.push(func)
}

module.exports = {
  onReady,
  isReady,
  get,
  _load,
  load
}
