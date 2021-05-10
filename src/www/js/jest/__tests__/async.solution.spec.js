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
  // if (!todo) return Promise.reject(`Todo ID ${id} not found`)

  return todo
}

const getTodoInBackground = (id, cb) => {
  getTodos()
    .then((todos) => cb(find(propEq('id', id), todos)))
  return true
}

describe('Async tests', () => {
  describe('#getTodos', () => {
    it('should work with async/await', async () => {
      const res = await getTodos()
      expect(res).toEqual(todos)
    })

    it('should work with await + resolves', async () => {
      await expect(getTodos()).resolves.toEqual(todos)
    })

    it('should work by returning a promise', () => {
      return getTodos()
        .then((res) => {
          expect(res).toEqual(todos)
        })
    })
  })

  describe('#getTodo', () => {
    it('should find a todo', async () => {
      await expect(getTodo(1)).resolves.toEqual(todos[0])
    })

    it('should throw error when todo not found', async () => {
      return await expect(getTodo(42)).rejects.toThrow('Todo ID 42 not found')
    })

    // TODO what's wrong with this test?
    it('should throw an error for missing todo', async () => {
      await expect(getTodo(42)).rejects.toThrow('Todo ID 42 not found')
    })
  })

  describe('#getTodoInBackground', () => {
    it('should get a todo in background and pass to callback', async () => {
      const flushPromises = () => new Promise(process.nextTick)
      const mock = jest.fn()
      getTodoInBackground(1, mock)
      await flushPromises()
      expect(mock).toHaveBeenCalledWith(todos[0])
    })
  })
})
