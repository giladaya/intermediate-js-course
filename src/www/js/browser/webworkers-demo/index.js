const worker = new Worker('worker.js')

let toggled = false

document.getElementById('toggle-color').addEventListener('click', function() {
  toggled = !toggled
  this.style.backgroundColor = toggled ? 'red' : ''
})

document.getElementById('run').addEventListener('click', () => {
  document.getElementById('output').innerText = 'Running...'
  // include set timeout so the DOM has a chance to render the line above
  setTimeout(() => {
    for (let i = 0; i < 5000000000; i++) {}
    console.log('done')
    document.getElementById('output').innerText = 'Finished!'
  }, 100)
})

document.getElementById('run-worker').addEventListener('click', () => {
  document.getElementById('output').innerText = 'Running with worker...'
  worker.postMessage(5000000000)
})

worker.addEventListener('message', ({ data }) => {
  console.log('Message from worker:', data)
  document.getElementById('output').innerText = 'Finished!'
})
