import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  color: ${({ theme }) => theme.color.black};
  gap: 3.2rem;
  text-align: center;
  opacity: 0;
  animation: infoFadeIn 4s ease-in-out 6s forwards;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    position: static;
    width: 100%;
    padding-bottom: 4.8rem;
  }

  @keyframes infoFadeIn {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
`
const Happening = styled.h3`
  font-size: ${({ theme }) => theme.type.size.c};
  line-height: ${({ theme }) => theme.type.height.xl};
  letter-spacing: 0.02em;
`
const Hope = styled.h2`
  font-size: ${({ theme }) => theme.type.size.c};
  line-height: ${({ theme }) => theme.type.height.xl};
  font-style: italic;
  width: 60%;
  letter-spacing: 0.02em;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: 100%;
  }
`
const Save = styled.h1`
  font-size: ${({ theme }) => theme.type.size.b};
  text-transform: uppercase;
  letter-spacing: 0.09em;
  line-height: ${({ theme }) => theme.type.height.lg};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    font-size: ${({ theme }) => theme.type.size.c};
    width: 90%;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`
const Date = styled.p`
  font-size: ${({ theme }) => theme.type.size.c};
  letter-spacing: 0.07em;
`
const Location = styled.p`
  font-size: ${({ theme }) => theme.type.size.c};
  letter-spacing: 0.05em;
`
const Invite = styled.p`
  font-size: ${({ theme }) => theme.type.size.d};
  font-style: italic;
  letter-spacing: 0.05em;
`
export const TextWrapper = () => {
  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(10)

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId)
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft])
  return (
    <Wrapper className={timeLeft <= 5 ? 'test' : ''}>
      <Happening>It&apos;s finally happening!</Happening>
      <Hope>We hope you can join us to celebrate our wedding!</Hope>
      <Save>please save the date</Save>
      <ContentWrapper>
        <Date>22nd July 2023</Date>
        <Location>Gothenburg, Sweden</Location>
      </ContentWrapper>
      <Invite>Invitation to follow</Invite>
    </Wrapper>
  )
}
