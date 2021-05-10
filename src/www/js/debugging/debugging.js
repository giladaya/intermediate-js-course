/**
 * Exercise 1
 * ============================================
 *
 * Set a `debugger` statement to investigate the source of the bug in your DevTools.
 */

const person = {
  firstName: 'Andrew',
  lastName: 'Smith',
  fullName() { return `${this.firstName} ${this.lastName}` },
  sayName() {
    setTimeout(function () {
      console.log(`Hello my name is ${this.fullName()}`)
    }, 100)
  },
}

person.sayName()

/**
 * Exercise 2
 * ============================================
 *
 * Something is weird with the click listener, it's not updating the click count on the button.
 * Use the Chrome DevTools to set a breakpoint on click events and investigate the issue.
 *
 * BONUS: also inspect the click listeners on the button, and check their current target.
 */

document.addEventListener('click', (e) => {
  const span = e.currentTarget.getElementsByTagName('span')[0]
  const clicks = parseInt(span.innerText)
  span.innerText = clicks + 1
})

/**
 * Exercise 3
 * ============================================
 *
 * Set up the debugger for either:
 *   1. VS Code
 *   2. Webstorm
 *
 * Once that's done, set up a breakpoint to investigate the bug, and fix it.
 * Bonus points if you can fit it without changing variable names.
 */

const exercise3 = () => {
  var i = 42

  for (var i = 0; i < 5; i++) {
    console.log('i', i)
  }

  console.assert(i === 42, 'expected i to equal 42')
}

exercise3()

/**
 * Exercise 4
 * ============================================
 *
 * Use the "Pause on exceptions" feature to pause at the place where the exception occurs.
 */

const exercise4 = () => {
  const inner = () => console.log('inner!')
  innner()
}

exercise4()
