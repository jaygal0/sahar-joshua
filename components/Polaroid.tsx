import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;
  text-align: center;
  padding: 4rem 3.2rem;
  background: #f8f8f6;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.12);
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
const ImageWrapper = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 80%;
  background: lightblue url('/couple.jpg') no-repeat;
  background-size: cover;
  animation: fadeIn 3s ease-in;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`
const Names = styled.h2`
  font-size: ${({ theme }) => theme.type.size.c};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  animation: fadeIn 4s ease-in;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
const Married = styled.p`
  font-size: ${({ theme }) => theme.type.size.e};
  text-transform: uppercase;
  letter-spacing: 0.2rem;

  animation: fadeIn 5s ease-in;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
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
