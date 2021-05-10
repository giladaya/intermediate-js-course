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

let ws // where you will store the websocket connection
let user // the name submitted in the form

document.querySelector('#name-form').addEventListener('submit', (e) => {
  // TODO: 1. prevent default form behavior
  //       2. grab the text from the input element
  //       3. Log that you joined: "You joined as: ..."
  //       4. Clear the input and hide the form
  //       5. Call `initializeSocket` to set up websocket connection
})

const initializeSocket = (user) => {
  // TODO: 1. connect to websocket server, passing `user` as a query param, store in `ws` variable
  //       2. when ws receives a message, `log` it to the DOM
}

/**
 * Exercise 2
 * ============================================
 *
 * Add chat functionality to the UI. When the user has joined, show
 * the #chat-form element, where you can type in messages and send
 * them to the people in the room. Each time the message is submitted,
 * you should clear the input.
 *
 * When it's finished, you should see messages you display as
 *
 *   You: hello world
 *
 * and then messages received from others as:
 *
 *   [user name]: Websockets are fun!
 */

document.querySelector('#chat-form').addEventListener('submit', (e) => {
  // TODO
})
