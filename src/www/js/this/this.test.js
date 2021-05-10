describe('this', () => {
  it('EXERCISE 1: should give an age and an function #isAdult which checks if age is >= 18', () => {
    const person = {
      age: 17,
      isAdult() {} // TODO
    }

    expect(person.isAdult()).toEqual(false)
  })

  it('EXERCISE 2: fix getColor so it uses contextual scope', () => {
    const c = {
      color: 'green',
      getColor: () => { // TODO
        return this.color
      }
    }

    expect(c.getColor()).toEqual('green')
  })

  it('EXERCISE 3: fix otherFn so it retains original scope', () => {
    const greeter = {
      message: 'Hello',
      print() {
        function otherFn() { // TODO
          expect(this.message).toEqual('Hello')
        }

        otherFn()
      }
    }

    greeter.print()
  })

  it('EXERCISE 4: fix getColorFn to retain scope using Function#bind', () => {
    const a = {
      color: 'red',
      getColor() {
        return this.color
      }
    }

    const getColorFn = a.getColor // TODO

    expect(getColorFn()).toEqual('red')
  })

  it('EXTRA CREDIT: fix this code', () => {
    const getAge = () => this.age

    const p1 = {
      age: 42,
      getAge
    }

    expect(p1.getAge()).toEqual(42)
  })
})

