/**
 * Exercise 1
 * ============================================
 *
 * Your first goal is to set up connecting to the chat server via
 * websockets. You will want to add a submit handler to the #name-form
 * so you can say who you are, and then initialize the websocket
 * connection.
 *
 * Once the websocket connection is established, listen for incoming
 * messages and simply log them to the DOM.
 */

const log = data => {
  $('#chat').prepend($('<li></li>').text(data))
}

let ws
let user

const initializeSocket = (user) => {
  ws = new WebSocket(`ws://localhost:3030?user=${user}`)

  ws.onmessage = ({ data }) => {
    log(data)
  }
}

document.querySelector('#name-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const input = e.target.querySelector('input')
  user = input.value
  log(`You joined as: ${user}`)
  input.value = ''
  initializeSocket(user)
  e.target.style.display = 'none'
  document.querySelector('#chat-form').style.display = 'block'
})

/**
 * Exercise 2
 * ============================================
 *
 * Add chat functionality to the UI. When the user has joined, show
 * the #chat-form element, where you can type in messages and send
 * them to the people in the room. Each time the message is submitted,
 * you should clear the input.
 */

document.querySelector('#chat-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const input = e.target.querySelector('input')
  const text = input.value
  log(`You: ${text}`)
  input.value = ''
  ws.send(text)
})

