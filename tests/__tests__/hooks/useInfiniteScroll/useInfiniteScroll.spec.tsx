import { fireEvent } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import useInfiniteScroll from 'hooks/useInfiniteScroll'

test('useInfiniteScroll', () => {
  const { clientHeight } = document.documentElement
  const scrollCallback = () => {
    expect(true).toBeTruthy()
  }

  fireEvent.scroll(document, { target: { scrollY: clientHeight } })

  renderHook(() => useInfiniteScroll(scrollCallback))
})
