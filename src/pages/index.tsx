import Link from 'next/link'

const Home = () => {
  return (
    <div>
      home page
      <br />
      <Link href="/homie/test">go to test page</Link>
    </div>
  )
}

export default Home
