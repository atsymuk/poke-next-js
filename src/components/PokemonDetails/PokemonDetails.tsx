import { useEffect, useMemo, VFC } from 'react'
import { useRouter } from 'next/router'

import { useGetByIdQuery } from 'app/api/pokemonApi'
import Spinner from 'components/Spinner/Spinner'
import ItemDetails, {
  SpecificationItem,
} from 'components/ItemDetails/ItemDetails'

const PokemonDetails: VFC = () => {
  const router = useRouter()
  const { id = '' } = router.query
  const { data, error } = useGetByIdQuery(id as string)

  useEffect(() => {
    if (error) {
      const { originalStatus } = error as { originalStatus: number }

      if (originalStatus == 404) {
        router.push('/404')
      } else {
        router.push('/500')
      }
    }
  }, [error, router])

  const specifications = useMemo<SpecificationItem[]>(() => {
    if (!data) {
      return []
    }

    return [
      {
        title: 'Abilities',
        value: data.abilities.map(({ ability: { name } }) => name).join(', '),
      },
      {
        title: 'Forms',
        value: data.forms.map(({ name }) => name).join(', '),
      },
      {
        title: 'Height',
        value: data.height,
      },
      {
        title: 'Weight',
        value: data.weight,
      },
      {
        title: 'Order',
        value: data.order,
      },
      {
        title: 'Base experience',
        value: data.base_experience,
      },
    ]
  }, [data])

  if (!data) {
    return <Spinner />
  }

  return (
    <ItemDetails
      image={data!.sprites.other['official-artwork'].front_default}
      title={data.name}
      specifications={specifications}
    />
  )
}

export default PokemonDetails
