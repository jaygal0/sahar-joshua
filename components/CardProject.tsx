import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const Container = styled.div`
  width: 65vw;
  background: ${(prop) => prop.color};
  border: 2px solid black;
  border-radius: 8.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.type.size.body.md};
  max-width: 986px;
  min-height: 543px;
  margin-bottom: 8.8rem;
  position: relative;
  transition: all ease-in-out 0.2s;
  box-shadow: 15px 15px 0 -3px #c6d0e1;
  top: -7px;
  left: -7px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 3px #c6d0e1;
    top: 0;
    left: 0;
  }

  &:active {
    transform: scale(0.99);
  }
`
const ImageContainer = styled.div`
  position: relative;
  padding: 7%;
`

const CardProject = ({
  logo,
  background,
  url,
}: {
  logo: string
  background?: string
  url: string
}) => {
  return (
    <Link href={`/projects/${url}`}>
      <Container color={background ? background : '#FFF5F5'}>
        <ImageContainer>
          <Image src={`/${logo}.svg`} layout="fill" />
        </ImageContainer>
      </Container>
    </Link>
  )
}

export default CardProject
