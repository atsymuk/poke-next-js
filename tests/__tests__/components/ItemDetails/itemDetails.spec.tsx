import { render } from '@testing-library/react'
import ItemDetails from 'components/ItemDetails/ItemDetails'

it('ItemDetails component snapshot', () => {
  const specifications = [
    {
      title: 'test1',
      value: 'test',
    },
    {
      title: 'test2',
      value: 'test',
    },
    {
      title: 'test3',
      value: 'test',
    },
  ]

  const { container } = render(
    <ItemDetails
      title="test"
      image="http://test.test/test.png"
      specifications={specifications}
    />,
  )
  expect(container).toMatchSnapshot()
})
