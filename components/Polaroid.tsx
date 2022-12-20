import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Wrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  text-align: center;
  padding: 2.4rem 2.4rem;
  background: white;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.12);
  opacity: 0;
  animation: polaroidFadeIn 2s ease-in-out 6.4s forwards;

  @keyframes polaroidFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    width: 40%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: 40%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    width: 100%;
    margin-top: 4rem;
  }
`
const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  background: #eff1f4;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    animation: animateImageMobile 7s ease-in-out forwards;
  }
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  animation: textFadeIn 3s ease-in 5s forwards;
`
const Names = styled.h2`
  font-size: ${({ theme }) => theme.type.size.c};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`
const Married = styled.p`
  align-items: center;

  font-size: ${({ theme }) => theme.type.size.e};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`

export const Polaroid = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src="/image-22.jpg" layout="fill" objectFit="cover" />
      </ImageWrapper>
      <TextWrapper>
        <Names>sahar &amp; joshua</Names>
        <Married>are getting married!</Married>
      </TextWrapper>
    </Wrapper>
  )
}
