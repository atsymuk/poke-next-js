import { render } from '@testing-library/react'
import Spinner from 'components/Spinner/Spinner'

it('Spinner component snapshot', () => {
  const { container } = render(<Spinner />)
  expect(container).toMatchSnapshot()
})
