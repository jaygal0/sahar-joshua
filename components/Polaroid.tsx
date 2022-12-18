import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;
  text-align: center;
  padding: 4rem 3.2rem;
  animation: backgroundFadeIn 2s ease-in-out 4s forwards;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: 60%;
    padding: 1.2rem 1.2rem;
    gap: 1.6rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    width: 100%;
    padding: 1.2rem 1.2rem;
    gap: 1.6rem;
  }

  @keyframes backgroundFadeIn {
    from {
      background: transparent;
      box-shadow: 0;
    }
    to {
      background: #f8f8f6;
      box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.12);
    }
  }
`
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 80%;
  animation: animateImage 5s ease-in-out;

  @keyframes animateImage {
    from {
      width: 90vw;
      padding-top: 140%;
      transform: translateX(25%);
    }
    to {
      width: 100%;
      padding-top: 80%;
      transform: translateX(0%);
    }
  }
`
const ImageComponent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &.magenta {
    background: magenta;
    background: url('/image-1.jpg') no-repeat;
    background-size: cover;
  }
  &.red {
    background: red;
    background: url('/image-2.jpg') no-repeat;
    background-size: cover;
  }
  &.green {
    background: green;
    background: url('/image-3.jpg') no-repeat;
    background-size: cover;
  }
  &.yellow {
    background: yellow;
    background: url('/image-4.jpg') no-repeat;
    background-size: cover;
  }
  &.orange {
    background: orange;
    background: url('/image-5.jpg') no-repeat;
    background-size: cover;
  }
  &.purple {
    background: purple;
    background: url('/image-6.jpg') no-repeat;
    background-size: cover;
  }
  &.blue {
    background: blue;
    background: url('/image-7.jpg') no-repeat;
    background-size: cover;
  }
  &.orangered {
    background: orangered;
    background: url('/image-8.jpg') no-repeat;
    background-size: cover;
  }
  &.gray {
    background: gray;
    background: url('/image-9.jpg') no-repeat;
    background-size: cover;
  }
  &.lightblue {
    background: lightblue;
    background: url('/image-10.jpg') no-repeat;
    background-size: cover;
  }
  &.lightcoral {
    background: lightcoral;
    background: url('/image-1.jpg') no-repeat;
    background-size: cover;
  }
  &.final {
    background: url('/couple.jpg') no-repeat;
    background-size: cover;
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
  font-size: ${({ theme }) => theme.type.size.e};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`

export const Polaroid = () => {
  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(10)

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 400)

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId)
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft])

  return (
    <Wrapper>
      <ImageWrapper>
        <ImageComponent
          className={
            timeLeft === 10
              ? 'magenta'
              : timeLeft === 9
              ? 'red'
              : timeLeft === 8
              ? 'green'
              : timeLeft === 7
              ? 'yellow'
              : timeLeft === 6
              ? 'orange'
              : timeLeft === 5
              ? 'purple'
              : timeLeft === 4
              ? 'blue'
              : timeLeft === 3
              ? 'orangered'
              : timeLeft === 2
              ? 'gray'
              : timeLeft === 1
              ? 'final'
              : 'final'
          }
        />
      </ImageWrapper>
      <TextWrapper>
        <Names>sahar &amp; joshua</Names>
        <Married>are getting married!</Married>
      </TextWrapper>
    </Wrapper>
  )
}
