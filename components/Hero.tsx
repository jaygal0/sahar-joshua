import React from 'react'
import styled from 'styled-components'

const HeroWrapper = styled.div<T>`
  width: 100vw;
  height: 100vh;
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-image: url(${(props) => props.background && props.background});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    padding: 3.2rem;
  }
`
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: #1a1a1acb;
  position: absolute;
  left: 0;
  z-index: 1;
`
const Heading = styled.h1`
  font-size: 9.6rem;
  z-index: 2;
  color: ${({ theme }) => theme.color.white};
  font-size: 9.6rem;
  text-transform: capitalize;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desklg}) {
    font-size: 7.2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 6.4rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    font-size: 4.8rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    font-size: 3.2rem;
  }
`
const Text = styled.p`
  width: 70%;
  font-size: 4.8rem;
  z-index: 2;
  color: ${({ theme }) => theme.color.white};
  line-height: 1.4;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desklg}) {
    font-size: 4rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 3.2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    width: 100%;
    font-size: 2.4rem;
  }
`

interface T {
  lang?: string
  heading?: string
  desc?: string
  img?: string
  background?: string
}

export const Hero: React.FC<T> = ({ lang, heading, desc, img, background }) => {
  return (
    <HeroWrapper background={background}>
      <Heading>{heading}</Heading>
      <Text>{desc}</Text>
      <Background />
    </HeroWrapper>
  )
}
