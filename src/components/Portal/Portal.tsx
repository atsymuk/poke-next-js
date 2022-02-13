import { ReactNode, useEffect, useState, VFC } from 'react'
import ReactDOM from 'react-dom'

interface PortalProps {
  children: ReactNode
}

const Portal: VFC<PortalProps> = ({ children }) => {
  const [container] = useState(() => {
    if (typeof window === 'undefined') {
      return
    }

    return document.createElement('div')
  })

  useEffect(() => {
    if (!container) {
      return
    }

    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [container])

  if (!container) {
    return null
  }

  return ReactDOM.createPortal(children, container)
}

export default Portal
