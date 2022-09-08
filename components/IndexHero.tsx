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

  @media screen and (max-width: 1280px) {
    padding-left: 15rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    padding-left: 4rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    padding-left: 0rem;
    transform: translateY(10vh);
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  transform: translate(-18rem, 5%);
  animation: fadeIn 0.7s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
  }

  @media screen and (max-width: 1280px) {
    transform: translate(-25rem, 5%);
    width: 30%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    width: 30%;
    transform: translate(-56rem, 5%);
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    position: absolute;
    transform: translate(0);
    top: -70%;
    left: 1.6rem;
    width: 55%;
  }
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
