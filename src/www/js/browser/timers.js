/**
 * Exercise 1
 * ============================================
 *
 * Add a click listener to the "Click Me" button. When clicked, it should
 * wait 2 seconds and then increment the value displayed.
 */

// code

/**
 * Exercise 2 (CHALLENGE MODE)
 * ============================================
 *
 * Add a click listener to the "Place Order" button. When clicked, it should
 * show a message of "Ordering..." and wait 2 seconds. While waiting, display
 * the "Cancel" button. If the order is canceled, reset to the original state.
 * If the order is not canceled, show a message of "Ordered!"
 */

// code

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

// code

/**
 * Exercise 4 (EXTRA CREDIT)
 * ============================================
 *
 * Give the "Click Me" button two click handlers, one that is throttled and
 * one that is debounced, both with a 500ms delay. When the event handlers
 * run, have them update the count of event handler calls for the respective
 * display. Also increment the button click counter for each click.
 */

// Use the throttle and debounce functions below

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
 * Exercise 5 (Extra Credit)
 * ============================================
 *
 * Create a stopwatch display, which displays minutes, seconds, and centiseconds.
 * Something like 01:23.45 is 1 minutes, 23 seconds, 45 centiseconds.
 * The stopwatch begins running when you click "Start" and pauses when you click
 * "Stop".
 */

// code
