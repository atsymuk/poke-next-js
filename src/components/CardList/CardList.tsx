import { VFC } from 'react'

import Card from 'components/Card/Card'

import styles from './cardList.module.scss'

export interface CardItem {
  image: string
  title: string
  url: string
}

interface CardListProps {
  items: CardItem[]
}

const CardList: VFC<CardListProps> = ({ items }) => (
  <ul className={styles.container}>
    {items.map(({ image, title, url }) => (
      <li className={styles.item} key={title}>
        <Card image={image} title={title} url={url} />
      </li>
    ))}
  </ul>
)

export default CardList
