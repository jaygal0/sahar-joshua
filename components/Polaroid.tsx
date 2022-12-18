import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 3vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;
  text-align: center;
  padding: 4rem 3.2rem;
  animation: reduceWidth 7s ease-in-out forwards;

  @keyframes reduceWidth {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 100%;
      background: transparent;
      box-shadow: 0;
      width: 100%;
      left: 0;
    }

    100% {
      width: 50%;
      background: #f8f8f6;
      box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.12);
      left: 10rem;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    position: static;
    animation: reduceWidthMobile 7s ease-in-out forwards;
  }
  @keyframes reduceWidthMobile {
    0% {
      opacity: 0;
      background: transparent;
      box-shadow: 0;
      width: 100%;
      left: 0;
      padding: 0;
    }
    40% {
      opacity: 100%;
      background: transparent;
      box-shadow: 0;
      width: 100%;
      left: 0;
      padding: 0;
    }
    100% {
      width: 100%;
      background: #f8f8f6;
      box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.12);
      padding: 1.2rem 1.2rem;
    }
  }
`
const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 70vh;
  animation: animateImage 7s ease-in-out forwards;
  background-image: url('/gif_1.gif');
  background-size: cover;
  background-position: center;

  @keyframes animateImage {
    from {
      padding-top: 85vh;
    }
    to {
      padding-top: 73vh;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    animation: animateImageMobile 7s ease-in-out forwards;
  }

  @keyframes animateImageMobile {
    from {
      padding-top: 80vh;
    }
    to {
      padding-top: 50vh;
    }
  }
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  animation: textFadeIn 1s ease-in 4s forwards;
  opacity: 0;

  @keyframes textFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
      <ImageWrapper />
      <TextWrapper>
        <Names>sahar &amp; joshua</Names>
        <Married>are getting married!</Married>
      </TextWrapper>
    </Wrapper>
  )
}
