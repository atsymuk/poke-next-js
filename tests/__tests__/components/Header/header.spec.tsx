import { render } from '@testing-library/react'
import Header from 'components/Header/Header'

it('Header component snapshot', () => {
  const { container } = render(<Header title="test" />)
  expect(container).toMatchSnapshot()
})
