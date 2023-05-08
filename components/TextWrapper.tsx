import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  color: ${({ theme }) => theme.color.black};
  gap: 3.2rem;
  text-align: center;
  opacity: 0;
  animation: textFadeIn 2s ease-in-out 7s forwards;

  @keyframes textFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    gap: 2.4rem;
    width: 50%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    gap: 2.4rem;
    width: 100%;
    padding-bottom: 4.8rem;
  }
`
const Happening = styled.h3`
  font-size: ${({ theme }) => theme.type.size.c};
  line-height: ${({ theme }) => theme.type.height.xl};
  letter-spacing: 0.02em;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: ${({ theme }) => theme.type.size.d};
  }
`
const Hope = styled.h2`
  font-size: ${({ theme }) => theme.type.size.c};
  line-height: ${({ theme }) => theme.type.height.xl};
  font-style: italic;
  width: 60%;
  letter-spacing: 0.02em;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: ${({ theme }) => theme.type.size.d};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: 100%;
  }
`
const Save = styled.h1`
  font-size: ${({ theme }) => theme.type.size.b};
  text-transform: uppercase;
  letter-spacing: 0.09em;
  line-height: ${({ theme }) => theme.type.height.lg};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: ${({ theme }) => theme.type.size.c};
    width: 90%;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    gap: ${({ theme }) => theme.spacing.xs};
  }
`

const Date = styled.p`
  font-size: ${({ theme }) => theme.type.size.c};
  letter-spacing: 0.07em;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: ${({ theme }) => theme.type.size.d};
  }
`
const Location = styled.p`
  font-size: ${({ theme }) => theme.type.size.c};
  letter-spacing: 0.05em;
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: ${({ theme }) => theme.type.size.d};
  }
`
export const TextWrapper = () => {
  return (
    <Wrapper>
      <Happening>It&apos;s finally happening!</Happening>
      <Hope>We hope you can join us to celebrate our wedding!</Hope>
      <Save>please save the date</Save>
      <ContentWrapper>
        <Date>22nd July 2023</Date>
        <Location>Gothenburg, Sweden</Location>
      </ContentWrapper>
      <Button label="View more information" url="/info" />
    </Wrapper>
  )
}
