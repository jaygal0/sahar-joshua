import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    align-items: flex-start;
    flex-direction: column;
    gap: 2.4rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    padding: 1.6rem 1.6rem 5.6rem 1.6rem;
  }
`
const ImageWrapper = styled.div`
  position: relative;
  width: 64px;
  height: 64px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    width: 32px;
    height: 32px;
  }
`
const Heading = styled.h2`
  font-size: 5.6rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 4rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: 3.2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    font-size: 2.4rem;
  }
`
const Time = styled.div`
  font-size: 4.8rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 3.2rem;
  }
`
const Desc = styled.p`
  font-size: 3.2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    font-size: 1.6rem;
  }
`
const Location = styled.p`
  font-size: 3.2rem;

  & span {
    text-decoration: underline;
  }

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    font-size: 1.6rem;
  }
`
const TextWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: 100%;
  }
`

interface T {
  heading: string
  description: string
  time: string
  icon: string
  location: string
  link: string
}

export const CardTimeline: React.FC<T> = ({
  heading,
  description,
  time,
  icon,
  location,
  link,
}) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={icon} layout="fill" objectFit="cover" />
      </ImageWrapper>
      <Time>{time}</Time>
      <TextWrapper>
        <Heading>{heading}</Heading>
        <Desc>{description}</Desc>
        {location && (
          <>
            <p>Location:</p>
            <a href={link} target="_blank">
              <Location>{location}</Location>
            </a>
          </>
        )}
      </TextWrapper>
    </Wrapper>
  )
}
