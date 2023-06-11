import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 5.6rem;

  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    justify-content: space-between;
  }
`
const Container = styled.div`
  width: 70%;
`
const Titles = styled.h2`
  font-size: 6.4rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desklg}) {
    font-size: 5.6rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 4.8rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: 3.2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonemd}) {
    font-size: 2.4rem;
  }
`
const ImageWrapper = styled.div`
  padding-top: 2.4rem;
  opacity: 0;
  transition: all 0.4s ease-in-out;
  transform: translateX(-40px);

  &.hover {
    opacity: 1;
    transform: translateX(0);
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    opacity: 1;
    transform: translateX(0px);
    width: 50px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    width: 30px;
  }
`

interface T {
  link: string
  title: string
  desc: string
  image: string
}

export const IndexLink: React.FC<T> = ({ link, title, desc, image }) => {
  const [isHover, setIsHover] = useState<Boolean>(false)

  const handleHover = () => {
    setIsHover(true)
  }

  const handleLeave = () => {
    setIsHover(false)
  }

  return (
    <Link href={link}>
      <TitleWrapper onMouseOver={handleHover} onMouseLeave={handleLeave}>
        <Container>
          <Titles>{title}</Titles>
          <p>{desc}</p>
        </Container>
        <ImageWrapper className={isHover ? 'hover' : ''}>
          <Image src={image} width={80} height={40} />
        </ImageWrapper>
      </TitleWrapper>
    </Link>
  )
}
