import * as R from 'ramda'

/**
 * Exercise 1
 * ============================================
 * Rewrite words as a curried function, using split
 */

const words = R.split(' ')

it('#words should split words in a sentence into an array', () => {
  expect(words('Hello world')).toEqual(['Hello', 'world'])
})

/**
 * Exercise 2
 * ============================================
 * Use the #words function with #map to apply the transformation to
 * multiple sentences. Hint: use Ramda's #map function, or write
 * your own!
 */

const sentences = R.map(words)

it('#sentences should break out words in multiple sentences', () => {
  const lyrics = [
    'Oh, I wanna dance with somebody',
    'I wanna feel the heat with somebody',
    'Yeah, I wanna dance with somebody',
    'With somebody who loves me',
  ]
  expect(sentences(lyrics)).toEqual(
    [
      ['Oh,', 'I', 'wanna', 'dance', 'with', 'somebody'],
      ['I', 'wanna', 'feel', 'the', 'heat', 'with', 'somebody'],
      ['Yeah,', 'I', 'wanna', 'dance', 'with', 'somebody'],
      ['With', 'somebody', 'who', 'loves', 'me'],
    ],
  )
})

/**
 * Exercise 3
 * ============================================
 * Write a function that filters out web addresses without https protocol.
 * Hint: Ramda provides a #filter function!
 */

const secureUrls = R.filter(R.test(/https/))

it('#secureUrls should filter web addresses without https protocol', () => {
  const urls = [
    'http://www.example.com',
    'https://www.google.com',
    'www.test.com',
    'https://www.reddit.com',
  ]
  expect(secureUrls(urls)).toEqual([
    'https://www.google.com',
    'https://www.reddit.com',
  ])
})

/**
 * Exercise 4
 * ============================================
 * Rewrite the sum function without any anonymous functions.
 * Hint: use Ramda's #reduce and #add functions, or write your own.
 */

const sum = R.reduce(R.add, 0)
// or:
// const reduce = R.curry((f, xs) => xs.reduce(f))
// const add = R.curry((a, b) => a + b)
// const sum = reduce(add)

it('#sum should sum up numbers in an array', () => {
  expect(sum([1, 2, 3, 4, 5])).toEqual(15)
})

/**
 * Exercise 5
 * ============================================
 * Write a sums function that applies the #sum function across
 * an array of arrays to sum.
 */

const sums = R.map(sum)

it('#sums should apply #sum to multiple arrays', () => {
  const nums1 = [1, 2, 3]
  const nums2 = [4, 5, 6]
  expect(sums([nums1, nums2])).toEqual([6, 15])
})


