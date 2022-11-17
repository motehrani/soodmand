import { FC } from 'react'

import type { AppProps } from 'next/app'

import '@src/shared/styles/_ant.less'
import '@src/shared/styles/index.scss'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App
