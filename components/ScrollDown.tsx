import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -2rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    display: none;
  }
`
const LineContainer = styled.div`
  width: 1px;
  height: 44px;
  position: relative;
  margin-bottom: 100px;
`
const Line = styled.div`
  position: absolute;
  width: 3px;
  height: 0px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.black};
  top: 0;
  bottom: initial;
  animation: line-animation 2.5s ease-in-out 0s infinite normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: ' ';
    width: 16px;
    height: 16px;
    border-right: 3px solid ${({ theme }) => theme.color.black};
    border-bottom: 3px solid ${({ theme }) => theme.color.black};
    transform: rotate(45deg);
    display: block;
    position: absolute;
    bottom: 0;
    animation: arrow-animation 2.5s ease-in-out 0s infinite normal;
  }

  @keyframes line-animation {
    0% {
      height: 0px;
      top: 0px;
      opacity: 0;
    }
    50% {
      height: 44px;
      top: 0px;
      opacity: 1;
    }
    100% {
      height: 0px;
      top: 44px;
      opacity: 0;
    }
  }

  @keyframes arrow-animation {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export const ScrollDown = () => {
  return (
    <Container>
      <LineContainer>
        <Line />
      </LineContainer>
    </Container>
  )
}
