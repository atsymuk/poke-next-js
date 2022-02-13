import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { store } from 'app/store'

import 'normalize.css/normalize.css'
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  )
}

export default App
