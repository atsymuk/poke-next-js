import { VFC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './card.module.scss'

interface CardProps {
  image: string
  title: string
  url: string
}

const Card: VFC<CardProps> = ({ image, title, url }) => (
  <Link href={url}>
    <a>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image alt={title} height={300} src={image} width={300} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
        </div>
      </div>
    </a>
  </Link>
)

export default Card
