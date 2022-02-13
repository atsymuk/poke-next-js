import { render } from '@testing-library/react'
import CardList from 'components/CardList/CardList'

it('CardList component snapshot', () => {
  const items = [
    {
      image: 'http://test.test/test.png',
      title: 'test1',
      url: '/',
    },
    {
      image: 'http://test.test/test.png',
      title: 'test2',
      url: '/',
    },
    {
      image: 'http://test.test/test.png',
      title: 'test3',
      url: '/',
    },
  ]

  const { container } = render(<CardList items={items} />)
  expect(container).toMatchSnapshot()
})
