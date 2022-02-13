import { ReactElement } from 'react'

import PokemonDetailsPageLayout from 'layouts/PokemonDetailsPageLayout/PokemonDetailsPageLayout'
import PokemonDetails from 'components/PokemonDetails/PokemonDetails'

const PokemonDetailsPage = () => {
  return <PokemonDetails />
}

PokemonDetailsPage.getLayout = (page: ReactElement) => (
  <PokemonDetailsPageLayout>{page}</PokemonDetailsPageLayout>
)

export default PokemonDetailsPage
