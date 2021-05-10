import * as R from 'ramda'

// Setup data
const users = [
  { id: 1, name: 'Andrew', age: 34, registered: true },
  { id: 2, name: 'Billy', age: 27, registered: false },
  { id: 3, name: 'Charles', age: 16, registered: false },
  { id: 4, name: 'David', age: 58, registered: true },
]

/**
 * Exercise 1
 * ============================================
 * Get the names of the last user
 */

const getUserNames = R.compose(R.prop('name'), R.last)

it('should get the last user name', () => {
  expect(getUserNames(users)).toEqual('David')
})

/**
 * Exercise 2
 * ============================================
 * Get the age of the first user in the list.
 * Hint: use R.prop and R.head
 */

const firstUserAge = R.compose(R.prop('age'), R.head)

it('should get first user age', () => {
  expect(firstUserAge(users)).toEqual(34)
})

/**
 * Exercise 3
 * ============================================
 * Get the list of users who can vote (age > 18).
 */

const votingAgedUsers = R.filter(R.compose(R.lt(18), R.prop('age')))

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

const votersToRegister = R.pipe(
  votingAgedUsers,
  R.filter(R.propEq('registered', false)),
)

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

  const double = R.multiply(2)

  const result = R.pipe(
    R.map(R.add(5)),
    R.map(double),
    R.sum,
  )(nums)

  expect(result).toEqual(80)
})
