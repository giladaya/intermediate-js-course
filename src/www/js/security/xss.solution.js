/**
 * Exercise 1
 * ============================================
 *
 * Use the DOMPurify library to block the ne'er-do-wells from wreaking havoc.
 * https://github.com/cure53/DOMPurify
 */

// pretend these came from the server...
const serverTodos = [
  { id: 1, title: 'Todo 1' },
  { id: 2, title: 'Todo 2' },
  { id: 3, title: 'Definitely not a hack.<img src=x onerror="alert(\'XSS Attack\')">' },
  { id: 4, title: 'Todo 4' },
]

const todosEl = document.querySelector('#todos')

serverTodos.forEach((todo) => {
  const li = document.createElement('li')
  li.innerHTML = DOMPurify.sanitize(todo.title)
  todosEl.appendChild(li)
})
