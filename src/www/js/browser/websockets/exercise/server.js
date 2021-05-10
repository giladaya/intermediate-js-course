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

// TODO initialize websocket server
const wss = null

const sendToOtherClients = (ws, data) => {
  // TODO implement to send `data` to all open clients that are not `ws`
}

wss.on('connection', (ws, req) => {
  // TODO 1. parse `user` from `req` query
  //      2. Notify other clients that this user joined: "... joined."
  //      3. When ws closes, notify other clients they quit: "... disconnected."
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
