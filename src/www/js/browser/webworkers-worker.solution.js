// this is the file that defines your web worker. Add more here.

importScripts('webworkers-expensive.js')

onmessage = () => {
  expensiveCalculation()
  postMessage('Worker finished')
}
