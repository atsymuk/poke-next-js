import { useCallback, useEffect, useState, VFC } from 'react'

import CardList from 'components/CardList/CardList'
import { useGetQuery } from 'app/api/pokemonApi'
import useInfiniteScroll from 'hooks/useInfiniteScroll'
import { PokemonListItem } from 'models/pokemon'
import Spinner from 'components/Spinner/Spinner'

const limit = 9

const PokemonList: VFC = () => {
  const [offset, setOffset] = useState(0)
  const [pokemons, setPokemons] = useState<PokemonListItem[]>([])

  const { data: { items, next } = { items: [] }, isFetching } = useGetQuery({
    offset,
    limit,
  })

  const loadMoreItems = useCallback(() => {
    if (next && !isFetching) {
      setOffset((currentOffset) => currentOffset + limit)
    }
  }, [next, setOffset, isFetching])

  useEffect(() => {
    setPokemons((currentPokemons) => [...currentPokemons, ...items])
  }, [items, setPokemons])

  useInfiniteScroll(loadMoreItems)

  return (
    <>
      {isFetching && <Spinner />}
      <CardList items={pokemons} />
    </>
  )
}

export default PokemonList
