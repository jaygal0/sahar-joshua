import type { NextPage } from 'next'
import { IndexLinks } from '../../components/IndexLinks'
import Nav from '../../components/Nav'
import { HeroIndex } from '../../components/HeroIndex'
import { Main } from '../../styles'

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <Main>
        <HeroIndex />
        <IndexLinks />
      </Main>
    </>
  )
}

export default Home
