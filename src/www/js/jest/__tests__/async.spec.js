const { find, propEq } = require('ramda')

const todos = [
  { id: 1, text: 'Learn Jest' },
  { id: 2, text: 'Learn async' },
  { id: 3, text: '???' },
  { id: 4, text: 'Profit 💸' },
]

const getTodos = () => (
  new Promise((res) => {
    process.nextTick(() => {
      res(todos)
    })
  })
)

const getTodo = async (id) => {
  const todos = await getTodos()
  const todo = find(propEq('id', id), todos)

  if (!todo) throw new Error(`Todo ID ${id} not found`)

  return todo
}

const getTodoInBackground = (id, cb) => {
  getTodos()
    .then((todos) => cb(find(propEq('id', id), todos)))
  return true
}

describe('Async tests', () => {
  describe('#getTodos', () => {
    it.todo('should work with async/await')

    it.todo('should work with await + resolves')

    it.todo('should work by returning a promise')
  })

  describe('#getTodo', () => {
    it.todo('should find a todo')

    it.todo('should throw error when todo not found')

    // TODO what's wrong with this test? Rewrite it so it doesn't silently fail
    it('should throw an error for missing todo', async () => {
      try {
        await getTodo(1)
      } catch (e) {
        expect(1).toEqual(0)
      }
    })
  })

  describe('#getTodoInBackground', () => {
    it.todo('should get a todo in background and pass to callback')
  })
})
