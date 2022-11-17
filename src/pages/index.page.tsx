import Link from 'next/link'

import { Button } from 'antd'

const Home = () => {
  return (
    <div>
      home page
      <br />
      <Link href="/homie/test">go to test page</Link>
      <Button type="primary">Test button</Button>
    </div>
  )
}

export default Home
