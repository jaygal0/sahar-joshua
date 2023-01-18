import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  gap: 3.2rem;
  flex-grow: 1;
  align-content: stretch;
  padding: 6.4rem;
  border: 1px #333 solid;
  width: 40%;
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
const TextWrapper = styled.div``

export const Card = ({
  heading,
  location,
  address,
  addressLink,
  line1,
  line2,
  icon,
}: {
  heading?: string
  location?: string
  address?: string
  addressLink?: string
  line1?: string
  line2?: string
  icon: string
}) => {
  return (
    <Wrapper>
      <Image src={icon ? icon : 'image-1.jpg'} width={32} height={32} />
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
      </TextWrapper>
    </Wrapper>
  )
}
