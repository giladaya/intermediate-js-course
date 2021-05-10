console.log('worker was loaded')

onmessage = ({ data }) => {
  const iterations = parseInt(data, 10)
  for (let i = 0; i < iterations; i++) {}
  postMessage('Worker finished')
}
