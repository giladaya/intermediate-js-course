import { getRandomInt } from './random'
import { getCurrentJackpot, resetJackpot } from './store'

export const coinFlip = () => {
  return getRandomInt(2) ? 'Heads' : 'Tails'
}

export const winJackpot = () => {
  const winnings = getCurrentJackpot()
  resetJackpot()
  return `You won $${winnings}!`
}
