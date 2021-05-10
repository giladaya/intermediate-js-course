import * as R from 'ramda'

// Setup data
const users = [
  { id: 1, name: 'Andrew', age: 34, registered: true },
  { id: 2, name: 'Billy', age: 27, registered: false },
  { id: 3, name: 'Cynthia', age: 16, registered: false },
  { id: 4, name: 'David', age: 58, registered: true },
]

/**
 * Exercise 1
 * ============================================
 * Get the names of the last user
 */

const getUserNames = (users) => {
  const lastUser = R.last(users)
  return R.prop('name', lastUser)
}

it('should get the last user name', () => {
  expect(getUserNames(users)).toEqual('David')
})

/**
 * Exercise 2
 * ============================================
 * Get the age of the first user in the list.
 * Hint: use R.prop and R.head
 */

const firstUserAge = undefined

it('should get first user age', () => {
  expect(firstUserAge(users)).toEqual(34)
})

/**
 * Exercise 3
 * ============================================
 * Get the list of users who can vote (age > 18).
 */

const votingAgedUsers = undefined

it('should get users of voting age', () => {
  const result = votingAgedUsers(users)
  expect(R.map(R.prop('name'), result)).toEqual(['Andrew', 'Billy', 'David'])
})

/**
 * Exercise 4
 * ============================================
 * Get the voting-aged users who are not registered to vote.
 * Write using pipe.
 * Hint: use R.propEq: https://ramdajs.com/docs/#propEq
 */

const votersToRegister = undefined

it('should get users who need to register', () => {
  const result = votersToRegister(users)
  expect(R.map(R.prop('name'), result)).toEqual(['Billy'])
})

/**
 * Exercise 5
 * ============================================
 * Rewrite using pipe, and drop all arrow functions if you can!
 */

it('rewrite using pipe and without arrow functions', () => {
  const nums = [1, 2, 3, 4, 5]

  const add = (a, b) => a + b
  const double = R.multiply(2)

  const result = nums
    .map(x => add(5, x))
    .map(double)
    .reduce(add)

  expect(result).toEqual(80)
})
