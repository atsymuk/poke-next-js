import type { VFC } from 'react'
import Image from 'next/image'

import Portal from 'components/Portal/Portal'

import styles from './spinner.module.scss'

const Spinner: VFC = () => (
  <Portal>
    <div className={styles.container}>
      <Image
        alt="loading in progress"
        src="/assets/spinner.gif"
        height={100}
        width={130}
      />
    </div>
  </Portal>
)

export default Spinner
