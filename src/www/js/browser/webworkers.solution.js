/**
 * Exercise 1
 * ============================================
 *
 * When "Run" is clicked, run the expensiveCalculation function and then update
 * the #output div to announce the run has finished.
 *
 * When "Run with worker" is clicked, do similar, but delegate the work to the
 * worker. You'll need to create a worker to post messages to it, or listen
 * for when it finishes.
 *
 * Notice how the clock freezes when you run the expensive calculation in the
 * regular runtime environment, but it doesn't when the worker does it.
 */

const worker = new Worker('webworkers-worker.solution.js')

document.getElementById('run').addEventListener('click', () => {
  // include set timeout so the DOM has a chance to render the line above
  expensiveCalculation()
  console.log('done')
  document.getElementById('output').innerText = 'Finished!'
})

document.getElementById('run-worker').addEventListener('click', () => {
  worker.postMessage(null)
})

worker.addEventListener('message', ({ data }) => {
  console.log('Message from worker:', data)
  document.getElementById('output').innerText = 'Finished!'
})

const updateTime = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  document.getElementById('ex1-display').innerText = `${hours}:${minutes}:${seconds}`
}

updateTime()

setInterval(updateTime, 1000)
