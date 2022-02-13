import { ReactElement } from 'react'

import DefaultLayout from 'layouts/DefaultLayout/DefaultLayout'
import PokemonList from 'components/PokemonList/PokemonList'

const Home = () => {
  return <PokemonList />
}

Home.getLayout = (page: ReactElement) => (
  <DefaultLayout title="Welcome to POKE NEXT JS!">{page}</DefaultLayout>
)

export default Home
