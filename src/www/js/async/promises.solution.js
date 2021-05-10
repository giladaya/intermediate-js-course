const fakeServerCall = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ data: 'ok' })
    }, 500)
  })
}

const fakeFailedServerCall = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej({ error: 'kaboom' })
    }, 500)
  })
}

/**
 * Exercise 1
 * ============================================
 *
 * Wait for the server response and store it in the variable
 * `serverRes`.
 */

fakeServerCall()
  .then((res) => res.data) // TODO, return server response data
  .then((serverRes) => {
    console.assert(serverRes === 'ok', 'Exercise 1: server response not correct')
  })

/**
 * Exercise 2
 * ============================================
 *
 * Catch a failed server response and store it in a variable.
 */

fakeFailedServerCall()
  .catch(err => err.error)
  .then((serverFailure) => {
    console.assert(serverFailure === 'kaboom', 'Exercise 2: failure not caught')
  })
/**
 * Exercise 3
 * ============================================
 *
 * Use async/await and Promise.all to wait for two server responses.
 */

const exercise3 = async () => {
  const call1 = fakeServerCall()
  const call2 = fakeServerCall()

  const [res1, res2] = (await Promise.all([call1, call2])).map(res => res.data)

  console.assert(res1 === 'ok', 'Exercise 3: first response incorrect')
  console.assert(res2 === 'ok', 'Exercise 3: second response incorrect')
}

exercise3()
