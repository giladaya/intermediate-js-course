const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 3030 })

wss.on('connection', (ws, req) => {
  console.log('Client connected')

  ws.send('Welcome!')

  ws.on('message', (data) => {
    if (data === 'PING') ws.send('PONG')
  })

  setTimeout(() => {
    ws.send('Server-initiated message')
  }, 2000)

  ws.on('close', () => {
    console.log('Client disconnected')
  })
})
