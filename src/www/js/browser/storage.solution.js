/**
 * Exercise 1
 * ============================================
 *
 * Prompt the user to accept/deny cookies. When they make their choice,
 * display the appropriate section. Store their response locally, so that
 * reloading the page still displays their preference.
 *
 * Implement the "reset" button to allow them to reset their choice.
 */

let cookiesEnabled = JSON.parse(localStorage.getItem('cookiesEnabled'))

const showUsingCookies = () => {
  document.getElementById('ex1-cookie-consent').style.display = 'none'
  document.getElementById('ex1-using-cookies').style.display = 'block'
}

const showNotUsingCookies = () => {
  document.getElementById('ex1-cookie-consent').style.display = 'none'
  document.getElementById('ex1-not-using-cookies').style.display = 'block'
}

const storeChoice = (enabled) => {
  localStorage.setItem('cookiesEnabled', enabled.toString())
}

document.getElementById('ex1-cookie-yes').addEventListener('click', () => {
  cookiesEnabled = true
  showUsingCookies()
  storeChoice(true)
})

document.getElementById('ex1-cookie-no').addEventListener('click', () => {
  cookiesEnabled = false
  showNotUsingCookies()
  storeChoice(false)
})

document.getElementById('ex1-reset').addEventListener('click', () => {
  localStorage.removeItem('cookiesEnabled')
  document.getElementById('ex1-cookie-consent').style.display = 'block'
  document.getElementById('ex1-using-cookies').style.display = 'none'
  document.getElementById('ex1-not-using-cookies').style.display = 'none'
})

if (cookiesEnabled != undefined) {
  cookiesEnabled ? showUsingCookies() : showNotUsingCookies()
}

// (cookiesEnabled && cookiesEnabled !== undefined) ? showUsingCookies() : showNotUsingCookies()
