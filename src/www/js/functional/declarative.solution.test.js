import { pipe } from 'ramda'

describe('Declarative', () => {
  it('Rewrite from imperative to declarative', () => {
    const animals = ['bird', 'orangutan', 'monkey', 'cat', 'lionfish']

    const result4 = animals
      .filter(x => x.length > 4)
      .reverse()
      .map(x => x.concat('!'))
      .sort((a, b) => a.length < b.length ? -1 : 1)
      .join(' < ')

    expect(result4).toEqual('monkey! < lionfish! < orangutan!')
  })
})
