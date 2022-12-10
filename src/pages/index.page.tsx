import { Opening } from '@src/shared/components/opening'
import { CatCards } from '@src/shared/components/cat-cards'
import { Best } from '@src/shared/components/best'
import { Space } from '@src/shared/components/space'
import { Space2 } from '@src/shared/components/space2'
import { TheNews } from '@src/shared/components/latest-news'

const Home = () => {
  return (
    <div>
      <Opening />
      <CatCards />
      <Best />
      <Space />
      <Best />
      <Space2 />
      <TheNews />
    </div>
  )
}

export default Home

// import { Button } from 'antd'
// // import { useState } from 'react'
// // import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil'
// // import { testAtom } from '@src/shared/atoms/test.atom'
// // const [state, setState] = useState()
// // const [state, setState] = useSetRecoilState(testAtom)
