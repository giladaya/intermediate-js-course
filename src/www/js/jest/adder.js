export class WeirdAdder {
  constructor(logger = console.log) {
    this.oddSums = []
    this.logger = logger
  }

  add(x, y) {
    let sum = x + y

    if (this._isOdd(sum)) {
      return this._foundOdd(sum)
    }

    return sum
  }

  getOddSumsCount() { return this._getOddSums().length }

  _isOdd(value) { return value % 2 === 1 }

  _getOddSums() { return this.oddSums }

  _foundOdd(n) {
    this.logger(`${n} is odd`)
    this.oddSums.push(n)
    return n
  }
}
