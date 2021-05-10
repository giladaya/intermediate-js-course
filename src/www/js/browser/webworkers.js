/**
 * Exercise 1
 * ============================================
 *
 * When "Run" is clicked, run the expensiveCalculation function and then update
 * the #output div to announce the run has finished. The `expensiveCalculation`
 * is globally available because it's imported in `webworkers.html`.
 *
 * Notice how the clock freezes when you run the expensive calculation in the
 * main thread.
 *
 * When "Run with worker" is clicked, do similar, but delegate the work to the
 * worker. You'll need to create a worker to post messages to it, or listen
 * for when it finishes. Your code for the web worker should go in
 * `webworkers-worker.js`:
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#spawning_a_dedicated_worker
 *
 * You will need to import the `webworkers-expensive.js` script in order to make
 * the `expensiveCalculation` function available to the worker:
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#importing_scripts_and_libraries
 *
 * Notice how the clock doesn't freeze when the worker runs the expensive
 * calcualtion.
 */

// You code goes here

/**
 * ============================================
 * You can ignore code below this point, it's for demonstration purposes
 * to regularly update the clock. This allows you to see how the main thread
 * and DOM updates get blocked by a long-running process.
 * ============================================
 */

const updateTime = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  document.getElementById('ex1-display').innerText = `${hours}:${minutes}:${seconds}`
}

updateTime()

setInterval(updateTime, 1000)
