import { FC } from 'react'

import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

import Layout from './../shared/components/layout'

import '@src/shared/styles/_ant.less'
import '@src/shared/styles/index.scss'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default App
