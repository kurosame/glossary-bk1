import { SET_WORDS, words } from '@/modules/word'

describe('Run when ActionType is SET_WORDS', () => {
  test('Set the state when payload exists', () => {
    expect(
      words(
        [
          {
            id: 'JavaScript',
            category: 'JavaScript',
            titles: ['JavaScript', 'JS'],
            description: 'It a JS'
          }
        ],
        {
          type: SET_WORDS,
          payload: [
            {
              id: 'TypeScript',
              category: 'JavaScript',
              titles: ['TypeScript', 'TS'],
              description: 'It a TS'
            }
          ]
        }
      )
    ).toEqual([
      {
        id: 'TypeScript',
        category: 'JavaScript',
        titles: ['TypeScript', 'TS'],
        description: 'It a TS'
      }
    ])
  })

  test('Set the state when payload is nothing', () => {
    expect(
      words(
        [
          {
            id: 'JavaScript',
            category: 'JavaScript',
            titles: ['JavaScript', 'JS'],
            description: 'It a JS'
          }
        ],
        {
          type: SET_WORDS,
          payload: undefined
        }
      )
    ).toEqual([
      {
        id: 'JavaScript',
        category: 'JavaScript',
        titles: ['JavaScript', 'JS'],
        description: 'It a JS'
      }
    ])
  })
})
