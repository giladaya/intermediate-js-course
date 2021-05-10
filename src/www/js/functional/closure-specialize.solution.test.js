describe('Closures: Specializing Behavior', () => {
  // general
  const prop = (key) => obj => obj[key]
  const groupBy = (keyExtractor) => (xs) => xs.reduce((acc, x) => {
    const key = keyExtractor(x)
    return { ...acc, [key]: (acc[key] || []).concat(x) }
  }, {})

  // specialized
  const getId = prop('id')
  const getName = prop('name')
  const getColor = prop('favoriteColor')

  const users = [
    { id: 1, name: 'Andrew', admin: true, favoriteColor: 'blue' },
    { id: 2, name: 'Billy', admin: false, favoriteColor: 'red' },
    { id: 3, name: 'Cynthia', admin: false, favoriteColor: 'red' },
    { id: 4, name: 'Dorothy', admin: false, favoriteColor: 'green' },
  ]
  const [andrew, billy, cynthia, dorothy] = users

  it('implement #prop (at top of file)', () => {
    expect(getId(andrew)).toEqual(1)
    expect(getName(andrew)).toEqual('Andrew')
  })

  it('rewrite these anonymous functions as a single generalized function', () => {
    // HINT should look something like:
    const setFontSize = size => () => { document.body.style.fontSize = `${size}px` }
    const setSize12 = setFontSize(12)
    const setSize14 = setFontSize(14)

    setSize12()
    expect(document.body.style.fontSize).toEqual('12px')
    setSize14()
    expect(document.body.style.fontSize).toEqual('14px')
  })

  it('EXTRA CREDIT: write a #registerUser helper', () => {
    // scaffolding... do not edit
    const usersById = {
      32: { id: 32, name: 'Alex', registered: false },
      47: { id: 47, name: 'Billy', registered: false },
    }
    const { 32: alex, 47: billy } = usersById

    // #createRegistration:
    //   1. takes a collection of objects indexed by their ID
    //   2. returns a function that expects an ID, and should:
    //       a. Find the user in the collection, and mark them as registered
    //       b. Throw an error "User XX not found" if the ID didn't match a user
    const createRegistration = (usersById) => (id) => {
      const user = usersById[id]
      if (!user) throw new Error(`User ${id} not found`)
      user.registered = true
    }

    // scaffolding... do not edit
    const register = createRegistration(usersById)
    register(32)
    expect(alex.registered).toEqual(true)
    expect(billy.registered).toEqual(false)
    register(47)
    expect(billy.registered).toEqual(true)
    expect(() => register(1000)).toThrow('User 1000 not found')
  })

  it('EXTRA CREDIT: implement #groupBy (at top of file)', () => {
    const groupedByColor = groupBy(getColor)
    expect(groupedByColor(users)).toEqual({
      blue: [andrew],
      red: [billy, cynthia],
      green: [dorothy],
    })
  })
})
