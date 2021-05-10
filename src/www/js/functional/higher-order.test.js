describe('Higher Order Functions', () => {
  it('write a #withoutPropagation function', () => {
    // setup code, ignore me...
    const event = { stopPropagation: jest.fn() }
    const eventWasHandled = jest.fn()
    const eventHandler = (e) => { eventWasHandled(e) }

    // it should take an event handler: (event: Event) => void
    // it should return a function that expects an event
    // it should call `#stopPropagation` on the event, and then
    //           pass it to the event handler
    const withoutPropagation = () => {}

    // don't edit me...
    // TODO test that eventWasHandled
    const wrappedEventHandler = withoutPropagation(eventHandler)
    wrappedEventHandler(event)
    expect(event.stopPropagation).toHaveBeenCalled()
  })

  it('EXTRA CREDIT: write a #repeat function', () => {
    // do not edit
    const mockFn = jest.fn()

    // #repeat takes a number, of how many times a callback function will be repeated.
    //         That invocation returns a function that will expect a count (which iteration of the repetition),
    //         along with other arguments
    //         That invocation returns a function that receives other arguments to be given to the callback function
    //
    //  If you're confused, look at its usage.
    const repeat = () => {}

    // do not edit
    const repeat3Times = repeat(3)
    const callMockFnThreeTimesWithArgs = repeat3Times(mockFn)
    callMockFnThreeTimesWithArgs('hello', 'world')
    expect(mockFn.mock.calls).toEqual([
      [1, 'hello', 'world'],
      [2, 'hello', 'world'],
      [3, 'hello', 'world'],
    ])
  })
})
