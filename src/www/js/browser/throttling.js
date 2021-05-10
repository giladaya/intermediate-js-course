const update = (id) => (e) => {
  document.getElementById(id).innerText = e.target.value
}

const updateDebounced = debounce(update('debounced'), 1000)
const updateThrottled = throttle(update('throttled'), 1000)

document.getElementById('event-limiting').addEventListener('keyup', update('unlimited'))
document.getElementById('event-limiting').addEventListener('keyup', updateDebounced)
document.getElementById('event-limiting').addEventListener('keyup', updateThrottled)

function throttle(func, duration) {
  let shouldWait = false
  return function (...args) {
    if (!shouldWait) {
      func.apply(this, args)
      shouldWait = true
      setTimeout(function () {
        shouldWait = false
      }, duration)
    }
  }
}

function debounce(func, duration) {
  let timeout
  return function (...args) {
    const effect = () => {
      timeout = null
      return func.apply(this, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(effect, duration)
  }
}
