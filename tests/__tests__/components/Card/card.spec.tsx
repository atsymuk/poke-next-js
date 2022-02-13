import { render } from '@testing-library/react'
import Card from 'components/Card/Card'

it('Card component snapshot', () => {
  const { container } = render(<Card image="http://test.test/test.png" title="test" url="/" />)
  expect(container).toMatchSnapshot()
})
