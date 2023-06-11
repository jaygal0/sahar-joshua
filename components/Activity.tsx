import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 70%;
  margin-bottom: 3rem;
`
const Heading = styled.h2`
  font-size: 5.6rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desklg}) {
    font-size: 4.8rem;
  }

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

const Desc = styled.p`
  font-size: 3.2rem;
  margin-bottom: 1.6rem;

  &.bold {
    font-weight: 400;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: 1.6rem;
  }
`

const ExternalLink = styled.a`
  font-size: inherit;
`

interface T {
  sv?: Boolean
  heading: string
  desc: string
  image: string
  date: string
  location: string
  locationLink: string
}

export const Activity: React.FC<T> = ({
  sv,
  heading,
  desc,
  date,
  image,
  location,
  locationLink,
}) => {
  return (
    <>
      {sv ? (
        <Wrapper>
          <ImageWrapper>
            <Image
              src={image}
              layout="fill"
              objectFit="cover"
              alt="activity image"
              placeholder="blur"
            />
          </ImageWrapper>
          <Heading>{heading}</Heading>
          <Desc>{desc}</Desc>
          <Desc className="bold">{`Datum: ${date}`}</Desc>
          <Desc className="bold">
            {`Plats: `}
            <ExternalLink
              href={locationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {location}
            </ExternalLink>
          </Desc>
        </Wrapper>
      ) : (
        <Wrapper>
          <ImageWrapper>
            <Image
              src={image}
              layout="fill"
              objectFit="cover"
              alt="activity image"
              placeholder="blur"
            />
          </ImageWrapper>
          <Heading>{heading}</Heading>
          <Desc>{desc}</Desc>
          <Desc className="bold">{`Date: ${date}`}</Desc>
          <Desc className="bold">
            {`Location: `}
            <ExternalLink
              href={locationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {location}
            </ExternalLink>
          </Desc>
        </Wrapper>
      )}
    </>
  )
}
