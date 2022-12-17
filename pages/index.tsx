import type { NextPage } from 'next'
import { IndexMain } from '../styles'
import styled from 'styled-components'
import { TextWrapper } from '../components/TextWrapper'
import { Polaroid } from '../components/Polaroid'

const Wrapper = styled.div`
  display: flex;
  max-width: 1504px;
  padding: 0 12rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 6.4rem;
  margin: 0 auto;
`

const Home: NextPage = () => {
  return (
    <>
      <IndexMain>
        <Wrapper>
          <Polaroid />
          <TextWrapper />
        </Wrapper>
      </IndexMain>
    </>
  )
}

export default Home
