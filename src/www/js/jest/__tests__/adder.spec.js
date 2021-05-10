import { WeirdAdder } from '../adder'

describe('Jest Exercises 1 and 2', () => {

  describe('WeirdAdder', () => {

    // Exercise 1:
    //
    // Write a test that verifies that the `add` method of the
    // `WeirdAdder' class correctly returns the sum of two arguments

    it('should add two numbers together', () => {})

    /**************************************************************************/
    // Exercise 2:
    //
    // Using Jest spies, write a test that `getOddSumsCount` returns the length
    // of odd sums returned by `_getOddSums`.
    //
    // HINT: provide a spy mock implementation for `_getOddSums` that returns
    // an array of odd sums.

    it('#getOddSumsCount should return number of odd sums', () => {})

    /**************************************************************************/
    // Exercise 3:
    //
    // Write a test where you add an odd sum and check the logger
    // is invoked with a message about the odd sum.
    //
    // HINT: use a Jest stub to track the call.

    it('#add should log the result when an odd sum is produced', () => {})
  })
})
