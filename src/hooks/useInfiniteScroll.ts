import { useMemo, useEffect } from 'react'
import debounce from 'lodash.debounce'

const useInfiniteScroll = (callback: () => void, treshold: number = 5) => {
  const scrollEventHandler = useMemo(() => {
    return debounce(() => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement

      if (scrollTop + clientHeight >= scrollHeight - treshold) {
        callback()
      }
    }, 100)
  }, [callback, treshold])

  useEffect(() => {
    window.addEventListener('scroll', scrollEventHandler)

    return () => {
      window.removeEventListener('scroll', scrollEventHandler)
    }
  }, [scrollEventHandler])
}

export default useInfiniteScroll
