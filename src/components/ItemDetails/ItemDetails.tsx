import { VFC } from 'react'
import Image from 'next/image'

import styles from './itemDetails.module.scss'

export interface SpecificationItem {
  title: string
  value: string | number
}

export interface ItemDetailsProps {
  title: string
  image: string
  specifications: SpecificationItem[]
}

const ItemDetails: VFC<ItemDetailsProps> = ({
  image,
  specifications,
  title,
}) => (
  <div className={styles.container}>
    <div className={styles.imageContainer}>
      <Image alt={title} height={500} src={image} width={500} />
    </div>
    <ul className={styles.content}>
      {specifications.map(({ title, value }) => (
        <li className={styles.property} key={title}>
          <span className={styles.title}>{title}:</span>
          <span className={styles.value}>{value}</span>
        </li>
      ))}
    </ul>
  </div>
)

export default ItemDetails
