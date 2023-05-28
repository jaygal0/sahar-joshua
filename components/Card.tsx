import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const Wrapper = styled.div`
  display: flex;
  gap: 3.2rem;
  flex-grow: 1;
  align-content: stretch;
  padding: 4.8rem;
  border: 1px #333 solid;
  width: 40%;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    padding: 3.2rem;
    flex-direction: column;
    width: 100%;
  }
`
const ImageContainer = styled.div`
  position: relative;

  &.padding {
    padding-top: 2.4rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    width: 20%;
  }
`

const Heading = styled.h2`
  margin-bottom: 1.6rem;
`
const Location = styled.p`
  font-size: ${({ theme }) => theme.type.size.c};
  margin-bottom: 0.8rem;
`
const Address = styled.a`
  margin-bottom: 1.6rem;
`
const Text = styled.p`
  margin-bottom: 0.8rem;
`
const TextWrapper = styled.div`
  width: 90%;
`
const Spacer = styled.div`
  height: 2.4rem;
`

export const Card = ({
  heading,
  location,
  address,
  addressLink,
  line1,
  line2,
  icon,
  padding,
  btn,
}: {
  heading?: string
  location?: string
  address?: string
  addressLink?: string
  line1?: string
  line2?: string
  padding?: Boolean
  icon: string
  btn?: Boolean
}) => {
  return (
    <Wrapper>
      {padding ? (
        <ImageContainer className="padding">
          <Image
            src={icon ? icon : 'image-1.jpg'}
            width={64}
            height={64}
            alt="icon"
          />
        </ImageContainer>
      ) : (
        <ImageContainer>
          <Image
            src={icon ? icon : 'image-1.jpg'}
            width={64}
            height={64}
            alt="icon"
          />
        </ImageContainer>
      )}
      <TextWrapper>
        <Heading>{heading} </Heading>
        {location && <Location>{location}</Location>}
        {address && (
          <Address href={addressLink} target="_blank">
            {address}
          </Address>
        )}
        <Text>{line1}</Text>
        {line2 && <Text>{line2}</Text>}
        {btn && (
          <>
            <Spacer />
            <Button label="Contribute" url="/contribute" />
          </>
        )}
      </TextWrapper>
    </Wrapper>
  )
}
