import { render } from '@testing-library/react'
import Portal from 'components/Portal/Portal'

it('Portal component snapshot', () => {
  const { container } = render(
    <Portal>
      <></>
    </Portal>,
  )
  expect(container).toMatchSnapshot()
})
