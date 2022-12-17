import type { NextPage } from 'next'
import { IndexMain, IndexWrapper } from '../styles'
import { TextWrapper } from '../components/TextWrapper'
import { Polaroid } from '../components/Polaroid'

const Home: NextPage = () => {
  return (
    <>
      <IndexMain>
        <IndexWrapper>
          <Polaroid />
          <TextWrapper />
        </IndexWrapper>
      </IndexMain>
    </>
  )
}

export default Home
