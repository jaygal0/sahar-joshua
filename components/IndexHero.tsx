import React from 'react'
import styled from 'styled-components'
import Face from './Face'
import Hero from './Hero'

const Container = styled.div`
  display: flex;
  position: relative;
  width: max-content;
  max-width: 1440px;
  padding-left: 12rem;
  align-items: center;
`

const ImageWrapper = styled.div`
  width: 100%;
  top: 0;
  right: 0;
  transform: translate(-18rem, 5%);
`

const IndexHero = () => {
  return (
    <Container>
      <Hero />
      <ImageWrapper>
        <Face />
      </ImageWrapper>
    </Container>
  )
}

export default IndexHero
