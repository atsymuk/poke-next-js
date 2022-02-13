import { ReactNode, VFC } from 'react'

import Header from 'components/Header/Header'

import styles from './defaultLayout.module.scss'

interface DefaultLayoutProps {
  children: ReactNode
  title: string
}

const DefaultLayout: VFC<DefaultLayoutProps> = ({ children, title }) => (
  <div className={styles.container}>
    <Header title={title} />
    <div className={styles.content}>{children}</div>
  </div>
)

export default DefaultLayout
