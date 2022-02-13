import fetchMock from 'jest-fetch-mock'

import { setupApiStore } from '../../../../fakeStore'

import { pokemonApi } from 'app/api/pokemonApi'

describe('Pokemon API: get', () => {
  beforeEach((): void => {
    fetchMock.resetMocks()
  })

  test('request is correct', () => {
    const emptyResponse = { results: [] }
    const storeRef = setupApiStore(pokemonApi)

    fetchMock.mockResponse(JSON.stringify(emptyResponse))

    return storeRef.store
      .dispatch<any>(pokemonApi.endpoints.get.initiate({}))
      .then(() => {
        expect(fetchMock).toBeCalledTimes(1)
        const { method, url } = fetchMock.mock.calls[0][0] as Request

        expect(method).toBe('GET')
        expect(url).toBe('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
      })
  })

  test('successful response', () => {
    const name = 'bulbasaur'
    const id = 1
    const response = {
      results: [
        {
          name,
          url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
        },
      ],
    }
    const storeRef = setupApiStore(pokemonApi)

    fetchMock.mockResponse(JSON.stringify(response))

    return storeRef.store
      .dispatch<any>(pokemonApi.endpoints.get.initiate({}))
      .then((action: any) => {
        const { status, data, isSuccess } = action

        expect(status).toBe('fulfilled')
        expect(isSuccess).toBe(true)
        expect(data).toStrictEqual({
          next: undefined,
          items: [
            {
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
              title: name,
              url: `/pokemon/${id}`,
            },
          ],
        })
      })
  })

  test('unsuccessful response', () => {
    const storeRef = setupApiStore(pokemonApi)

    fetchMock.mockReject(new Error('Internal Server Error'))

    return storeRef.store
      .dispatch<any>(pokemonApi.endpoints.get.initiate({}))
      .then((action: any) => {
        const {
          status,
          error: { error },
          isError,
        } = action

        expect(status).toBe('rejected')
        expect(isError).toBe(true)
        expect(error).toBe('Error: Internal Server Error')
      })
  })
})

describe('Pokemon API: getById', () => {
  beforeEach((): void => {
    fetchMock.resetMocks()
  })

  test('request is correct', () => {
    const storeRef = setupApiStore(pokemonApi)

    fetchMock.mockResponse(JSON.stringify({}))

    return storeRef.store
      .dispatch<any>(pokemonApi.endpoints.getById.initiate('1'))
      .then(() => {
        expect(fetchMock).toBeCalledTimes(1)
        const { method, url } = fetchMock.mock.calls[0][0] as Request

        expect(method).toBe('GET')
        expect(url).toBe('https://pokeapi.co/api/v2/pokemon/1')
      })
  })

  test('successful response', () => {
    const name = 'bulbasaur'
    const id = 1
    const response = {
      id,
      name,
    }
    const storeRef = setupApiStore(pokemonApi)

    fetchMock.mockResponse(JSON.stringify(response))

    return storeRef.store
      .dispatch<any>(pokemonApi.endpoints.getById.initiate('1'))
      .then((action: any) => {
        const { status, data, isSuccess } = action

        expect(status).toBe('fulfilled')
        expect(isSuccess).toBe(true)
        expect(data).toStrictEqual({
          id,
          name,
        })
      })
  })

  test('unsuccessful response', () => {
    const storeRef = setupApiStore(pokemonApi)

    fetchMock.mockReject(new Error('Internal Server Error'))

    return storeRef.store
      .dispatch<any>(pokemonApi.endpoints.getById.initiate('1'))
      .then((action: any) => {
        const {
          status,
          error: { error },
          isError,
        } = action

        expect(status).toBe('rejected')
        expect(isError).toBe(true)
        expect(error).toBe('Error: Internal Server Error')
      })
  })
})
