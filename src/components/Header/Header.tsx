import type { VFC } from 'react'
import Link from 'next/link'

import styles from './header.module.scss'

interface HeaderProps {
  backUrl?: string
  title: string
}

const Header: VFC<HeaderProps> = ({ backUrl, title }) => (
  <div className={styles.container}>
    {backUrl && (
      <Link href={backUrl}>
        <a className={styles.backLink}>{'< Back'}</a>
      </Link>
    )}
    <h1 className={styles.header}>{title}</h1>
  </div>
)

export default Header
