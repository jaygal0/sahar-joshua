import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100px;
  color: black;
  gap: 4.8rem;
  text-align: center;
  animation: fadeIn 5s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
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
`
const Save = styled.h1`
  font-size: ${({ theme }) => theme.type.size.b};
  text-transform: uppercase;
  letter-spacing: 0.09em;
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
  return (
    <Wrapper>
      <Happening>It's finally happening!</Happening>
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
