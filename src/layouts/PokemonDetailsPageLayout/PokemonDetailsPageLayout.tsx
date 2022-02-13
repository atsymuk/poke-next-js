import { ReactNode, VFC } from 'react'
import { useRouter } from 'next/router'

import Header from 'components/Header/Header'
import { useGetByIdQuery } from 'app/api/pokemonApi'

import styles from './pokemonDetailsPageLayout.module.scss'

interface PokemonDetailsPageLayoutProps {
  children: ReactNode
}

const PokemonDetailsPageLayout: VFC<PokemonDetailsPageLayoutProps> = ({
  children,
}) => {
  const router = useRouter()
  const { id = '' } = router.query
  const { data } = useGetByIdQuery(id as string)

  return (
    <div className={styles.container}>
      <Header title={data?.name || ''} backUrl="/" />
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default PokemonDetailsPageLayout
