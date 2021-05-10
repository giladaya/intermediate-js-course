/**
 * Exercise 1
 * ============================================
 *
 * You will set up a basic websockets server. It will listen for connections, parse the user name,
 * and notify other clients that the user has joined. When the connection closes, other clients
 * will be notified that they have disconnected.
 */

const url = require('url')
const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 3030 })

let recentMessages = []

const sendToOtherClients = (ws, data) => {
  wss.clients.forEach((client) => {
    if (ws !== client && client.readyState === WebSocket.OPEN) {
      client.send(data)
    }
  })
}

wss.on('connection', (ws, req) => {
  recentMessages.forEach((message) => {
    ws.send(message)
  })

  const user = url.parse(req.url, true).query.user

  sendToOtherClients(ws, `${user} joined.`)

  ws.on('message', (data) => {
    const message = `${user}: ${data}`
    recentMessages = [...recentMessages, message].slice(-5)
    sendToOtherClients(ws, message)
  })

  ws.on('close', () => {
    sendToOtherClients(ws, `${user} disconnected.`)
  })
})


/**
 * Exercise 2
 * ============================================
 *
 * You're going to add the chat functionality now. The server should listen
 * for chat messages from a ws connection and relay them to other clients.
 */

// most of the code for this exercise will go above, augmenting the existing
// implementation for Exercise 1.

/**
 * Exercise 3 (extra credit)
 * ============================================
 *
 * When you join a chat, it can be helpful to have some context about what
 * has been said recently. Keep track of the 5 most recent messages, and
 * send them to newly-connected ws connections to bring them up to speed.
 */

