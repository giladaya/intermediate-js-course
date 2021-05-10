/**
 * Exercise 1
 * ============================================
 *
 * Add a click listener to the "Click Me" button. When clicked, it should
 * wait 2 seconds and then increment the value displayed.
 */

let clicks = 0

document.getElementById('ex1-button').addEventListener('click', () => {
  setTimeout(() => {
    clicks += 1
    document.getElementById('ex1-count').innerText = clicks
  }, 2000)
})

/**
 * Exercise 2 (CHALLENGE MODE)
 * ============================================
 *
 * Add a click listener to the "Place Order" button. When clicked, it should
 * show a message of "Ordering..." and wait 2 seconds. While waiting, display
 * the "Cancel" button. If the order is canceled, reset to the original state.
 * If the order is not canceled, show a message of "Ordered!"
 */

let ordering
let timeoutID

document.getElementById('ex2-button').addEventListener('click', () => {
  document.getElementById('ex2-cancel-button').style.display = 'inline-block'
  document.getElementById('ex2-results').innerText = 'Ordering...'
  timeoutID = setTimeout(() => {
    document.getElementById('ex2-cancel-button').style.display = 'none'
    document.getElementById('ex2-results').innerText = 'Ordered!'
  }, 2000)
})

document.getElementById('ex2-cancel-button').addEventListener('click', () => {
  document.getElementById('ex2-cancel-button').style.display = 'none'
  document.getElementById('ex2-results').innerText = ''
  clearTimeout(timeoutID)
})

/**
 * Exercise 3
 * ============================================
 *
 * Display the current time in HH:MM:SS 24 hr format (e.g. 4:15:50 PM -> 16:15:50).
 * The clock should update every second.
 * Hint: you'll be working with the JS Date object:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 *
 * Extra hint: look under the "Methods" section on the left sidebar of the docs to figure
 * out what methods you might want to use.
 *
 * Extra extra hint: You'll use
 *
 * - date.getHours()
 * - date.getMinutes()
 * - date.getSeconds()
 *
 * to get the hours, minutes, and seconds. See the solution for more guidance.
 *
 * BONUS CHALLENGE: Now display it in hh:MM AM/PM format, e.g. 4:15 PM. Toggle the
 * time separator (the colon :) on or off each second to mark the passage of seconds.
 */

const updateTime = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  document.getElementById('ex3-display').innerText = `${hours}:${minutes}:${seconds}`
}

updateTime()

setInterval(updateTime, 1000)

/**
 * Exercise 4 (EXTRA CREDIT)
 * ============================================
 *
 * Give the "Click Me" button two click handlers, one that is throttled and
 * one that is debounced, both with a 500ms delay. When the event handlers
 * run, have them update the count of event handler calls for the respective
 * display. Also increment the button click counter for each click.
 */

let buttonClicks = 0
let throttledEvents = 0
let debouncedEvents = 0

const handler1 = () => {
  throttledEvents += 1
  document.getElementById('ex4-throttled').innerText = throttledEvents
}

const handler2 = () => {
  debouncedEvents += 1
  document.getElementById('ex4-debounced').innerText = debouncedEvents
}

const throttledHandler = throttle(handler1, 500)
const debouncedHandler = debounce(handler2, 500)

document.getElementById('ex4-button').addEventListener('click', () => {
  buttonClicks += 1
  document.getElementById('ex4-button-clicks').innerText = buttonClicks
  throttledHandler()
  debouncedHandler()
})

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

/**
 * Exercise 5
 * ============================================
 *
 * Create a stopwatch display, which displays minutes, seconds, and centiseconds.
 * Something like 01:23.45 is 1 minutes, 23 seconds, 45 centiseconds.
 * The stopwatch begins running when you click "Start" and pauses when you click
 * "Stop".
 */

const stopwatch = document.getElementById('ex5-stopwatch')
stopwatch.innerText = '00:00.00'
let elapsed = 0

const updateStopwatch = () => {
  elapsed += 10
  const minutes = Math.floor(elapsed / 1000 / 60)
  const seconds = Math.floor((elapsed - minutes * 1000 * 60) / 1000)
  const centiseconds = Math.floor((elapsed - minutes * 1000 * 60 - seconds * 1000) / 10)
  const minutesDisplay = minutes.toString().padStart(2, '0')
  const secondsDisplay = seconds.toString().padStart(2, '0')
  const centisecondsDisplay = centiseconds.toString().padStart(2, '0')
  stopwatch.innerText = `${minutesDisplay}:${secondsDisplay}.${centisecondsDisplay}`
}

let stopwatchInterval
document.getElementById('ex5-start').addEventListener('click', () => {
  stopwatchInterval = setInterval(updateStopwatch, 10)
})
document.getElementById('ex5-stop').addEventListener('click', () => {
  clearInterval(stopwatchInterval)
})
