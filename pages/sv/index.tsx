import type { NextPage } from 'next'
import { IndexLinks } from '../../components/IndexLinks'
import Nav from '../../components/NavSV'
import { HeroIndex } from '../../components/HeroIndex'
import { Main } from '../../styles'

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <Main>
        <HeroIndex lang="sv" />
        <IndexLinks lang="sv" />
      </Main>
    </>
  )
}

export default Home
