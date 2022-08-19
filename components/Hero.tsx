import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: min-content;
  align-items: center;
  justify-content: center;
`
const Subtitle = styled.h2`
  width: 90%;
  font-size: ${({ theme }) => theme.type.size.title.md};
  font-weight: ${({ theme }) => theme.type.weight.bold};
  font-family: 'DM Sans', sans-serif;
  color: ${({ theme }) => theme.color.home.subtitle};
`
const Title = styled.h1`
  width: 90%;
  font-size: ${({ theme }) => theme.type.size.display.lg};
  line-height: ${({ theme }) => theme.type.height.sm};
  text-transform: capitalize;
  color: ${({ theme }) => theme.color.text};
`
const Hero = () => {
  return (
    <Container>
      <Subtitle>Hi, I'm Joshua Galinato</Subtitle>
      <Title>I design, develop &amp; solve problems</Title>
    </Container>
  )
}

export default Hero
