import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: min-content;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    width: 100vw;
  }
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

  @media screen and (max-width: 1280px) {
    font-size: ${({ theme }) => theme.type.size.display.sm};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: ${({ theme }) => theme.type.size.title.lg};
  }
`
const Design = styled.span`
  transition: color ease-in 0.25s;
  &:hover {
    cursor: pointer;
    font-family: 'Lora', serif;
    line-height: 90%;
    text-decoration: underline;
    color: ${({ theme }) => theme.color.home.logo};
  }
`
const Develop = styled.span`
  transition: color ease-in 0.25s;
  &:hover {
    cursor: pointer;
    font-family: 'Libre Barcode 39', cursive;
    line-height: 50%;
    text-decoration: underline;
    color: ${({ theme }) => theme.color.unofficeHours.logo};
  }
`
const Solve = styled.span`
  transition: all ease-in 0.25s;
  &:hover {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${({ theme }) => theme.color.home.logo};
    color: white;
  }
`
const Hero = () => {
  return (
    <Container>
      <Subtitle>Hi, I&apos;m Joshua Galinato</Subtitle>
      <Title>
        I{' '}
        <Link href="/projects">
          <Design>design, </Design>
        </Link>
        <br />
        <Link href="/projects">
          <Develop>develop </Develop>
        </Link>
        <br />
        &amp; <Solve>solve problems</Solve>
      </Title>
    </Container>
  )
}

export default Hero
