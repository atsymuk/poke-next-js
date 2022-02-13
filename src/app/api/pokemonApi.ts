import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  Pokemon,
  PokemonListResponse,
  PokemonList,
} from 'models/pokemon'

import { getIdFromUrl } from 'utils/getIdFromUrl'

export const pokemonApi = createApi({
  reducerPath: 'pokemons',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2' }),
  endpoints: (builder) => ({
    get: builder.query<PokemonList, { offset?: number; limit?: number }>({
      query: ({ offset = 0, limit = 10 }) =>
        `pokemon?offset=${offset}&limit=${limit}`,
      transformResponse: (response: PokemonListResponse) => ({
        next: response.next,
        items: response.results.map(({ name, url }) => {
          const id = getIdFromUrl(url)

          return {
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            title: name,
            url: `/pokemon/${id}`,
          }
        }),
      }),
    }),
    getById: builder.query<Pokemon, string>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
})

export const { useGetQuery, useGetByIdQuery } = pokemonApi
