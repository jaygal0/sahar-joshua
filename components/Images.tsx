import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  max-width: 2440px;
  z-index: 2;
  animation: fadeOut 2s ease-out 5s forwards;

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`
const PolaroidWrapper = styled.div`
  position: absolute;
  width: 30rem;
  height: 30rem;
  padding: 1.6rem 1.6rem 4.8rem 1.6rem;
  background: white;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
  opacity: 0;
  animation: fadeIn 2s ease-in-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    width: 22rem;
    height: 22rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonemd}) {
    width: 20rem;
    height: 20rem;
    padding: 1.2rem 1.2rem 4em 1.2rem;
  }

  &.image-1 {
    top: 40%;
    left: 20%;
    @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
      top: 40%;
      left: -10%;
    }
  }
  &.image-2 {
    top: 68%;
    left: 77%;
    animation-delay: 0.5s;
    @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
      top: 82%;
      left: 47%;
    }
  }
  &.image-3 {
    top: 58%;
    left: 52%;
    animation-delay: 1.2s;

    @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
      top: 57%;
      left: 52%;
    }
  }
  &.image-4 {
    top: 10%;
    left: 27%;
    animation-delay: 0.3s;

    @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
      top: 17%;
      left: 10%;
    }
  }
  &.image-5 {
    top: 2%;
    left: 58%;
    animation-delay: 1.3s;

    @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
      top: 2%;
      left: 49%;
    }
  }
  &.image-6 {
    top: 63%;
    left: 28%;
    animation-delay: 0.7s;

    @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
      top: 60%;
      left: 5%;
    }
  }
  &.image-7 {
    top: 70%;
    left: 2%;
    animation-delay: 1.1;

    @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
      top: 80%;
      left: -2%;
    }
  }
  &.image-8 {
    top: 29%;
    left: 71%;
    animation-delay: 1.7s;
    @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
      top: 23%;
      left: 61%;
    }
  }
  &.image-9 {
    top: 27%;
    left: 48%;
    animation-delay: 1.4s;

    @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
      top: 37%;
      left: 28%;
    }
  }
  &.image-10 {
    top: -4%;
    left: 80%;
    z-index: -1;
    animation-delay: 0.9s;
  }
  &.image-11 {
    top: 1%;
    left: 5%;
    z-index: -1;
    animation-delay: 1s;

    @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
      top: -1%;
      left: -2%;
    }
  }
`
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const Images = () => {
  return (
    <Wrapper>
      <PolaroidWrapper className="image-1">
        <ImageWrapper>
          <Image src="/image-1.jpg" layout="fill" objectFit="cover" />
        </ImageWrapper>
      </PolaroidWrapper>
      <PolaroidWrapper className="image-2">
        <ImageWrapper>
          <Image src="/image-2.jpg" layout="fill" objectFit="cover" />
        </ImageWrapper>
      </PolaroidWrapper>
      <PolaroidWrapper className="image-3">
        <ImageWrapper>
          <Image src="/image-3.jpg" layout="fill" objectFit="cover" />
        </ImageWrapper>
      </PolaroidWrapper>
      <PolaroidWrapper className="image-4">
        <ImageWrapper>
          <Image src="/image-4.jpg" layout="fill" objectFit="cover" />
        </ImageWrapper>
      </PolaroidWrapper>
      <PolaroidWrapper className="image-5">
        <ImageWrapper>
          <Image src="/image-5.jpg" layout="fill" objectFit="cover" />
        </ImageWrapper>
      </PolaroidWrapper>
      <PolaroidWrapper className="image-6">
        <ImageWrapper>
          <Image src="/image-6.jpg" layout="fill" objectFit="cover" />
        </ImageWrapper>
      </PolaroidWrapper>
      <PolaroidWrapper className="image-7">
        <ImageWrapper>
          <Image src="/image-7.jpg" layout="fill" objectFit="cover" />
        </ImageWrapper>
      </PolaroidWrapper>
      <PolaroidWrapper className="image-8">
        <ImageWrapper>
          <Image src="/image-8.jpg" layout="fill" objectFit="cover" />
        </ImageWrapper>
      </PolaroidWrapper>
      <PolaroidWrapper className="image-9">
        <ImageWrapper>
          <Image src="/image-9.jpg" layout="fill" objectFit="cover" />
        </ImageWrapper>
      </PolaroidWrapper>
      <PolaroidWrapper className="image-10">
        <ImageWrapper>
          <Image src="/image-10.jpg" layout="fill" objectFit="cover" />
        </ImageWrapper>
      </PolaroidWrapper>
      <PolaroidWrapper className="image-11">
        <ImageWrapper>
          <Image src="/image-11.jpg" layout="fill" objectFit="cover" />
        </ImageWrapper>
      </PolaroidWrapper>
    </Wrapper>
  )
}
