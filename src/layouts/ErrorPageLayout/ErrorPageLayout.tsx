import type { ReactNode, VFC } from 'react'

import styles from './errorPageLayout.module.scss'

interface ErrorPageLayoutProps {
  children: ReactNode
  title: string
}

const ErrorPageLayout: VFC<ErrorPageLayoutProps> = ({ children, title }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.content}>{children}</div>
  </div>
)

export default ErrorPageLayout
