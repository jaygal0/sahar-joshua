import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import image1 from '../public/image-1.jpg'
import image2 from '../public/image-15.jpg'
import image3 from '../public/image-3.jpg'
import image4 from '../public/image-27.jpg'
import image5 from '../public/image-5.jpg'
import image6 from '../public/image-6.jpg'
import image7 from '../public/image-7.jpg'
import image8 from '../public/image-4.jpg'
import image9 from '../public/image-9.jpg'
import image10 from '../public/image-10.jpg'
import image11 from '../public/image-11.jpg'

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
      z-index: 99;
    }
    to {
      opacity: 0;
      z-index: -1;
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
          <Image
            src={image1}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            priority
            alt="image of joshua and siara"
          />
        </ImageWrapper>
      </PolaroidWrapper>
      <PolaroidWrapper className="image-2">
        <ImageWrapper>
          <Image
            src={image2}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            priority
            alt="image of joshua and siara"
          />
        </ImageWrapper>
      </PolaroidWrapper>
      <PolaroidWrapper className="image-3">
        <ImageWrapper>
          <Image
            src={image3}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            priority
            alt="image of joshua and siara"
          />
        </ImageWrapper>
      </PolaroidWrapper>
      <PolaroidWrapper className="image-4">
        <ImageWrapper>
          <Image
            src={image4}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            priority
            alt="image of joshua and siara"
          />
        </ImageWrapper>
      </PolaroidWrapper>
      <PolaroidWrapper className="image-5">
        <ImageWrapper>
          <Image
            src={image5}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            priority
            alt="image of joshua and siara"
          />
        </ImageWrapper>
      </PolaroidWrapper>
      <PolaroidWrapper className="image-6">
        <ImageWrapper>
          <Image
            src={image6}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            priority
            alt="image of joshua and siara"
          />
        </ImageWrapper>
      </PolaroidWrapper>
      <PolaroidWrapper className="image-7">
        <ImageWrapper>
          <Image
            src={image7}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            priority
            alt="image of joshua and siara"
          />
        </ImageWrapper>
      </PolaroidWrapper>
      <PolaroidWrapper className="image-8">
        <ImageWrapper>
          <Image
            src={image8}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            priority
            alt="image of joshua and siara"
          />
        </ImageWrapper>
      </PolaroidWrapper>
      <PolaroidWrapper className="image-9">
        <ImageWrapper>
          <Image
            src={image9}
            layout="fill"
            objectFit="cover"
            objectPosition="0px -25px"
            placeholder="blur"
            priority
            alt="image of joshua and siara"
          />
        </ImageWrapper>
      </PolaroidWrapper>
      <PolaroidWrapper className="image-10">
        <ImageWrapper>
          <Image
            src={image10}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            priority
            alt="image of joshua and siara"
          />
        </ImageWrapper>
      </PolaroidWrapper>
      <PolaroidWrapper className="image-11">
        <ImageWrapper>
          <Image
            src={image11}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            priority
            alt="image of joshua and siara"
          />
        </ImageWrapper>
      </PolaroidWrapper>
    </Wrapper>
  )
}
