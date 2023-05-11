import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  background: #faf7f2;
  color: ${({ theme }) => theme.color.black};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`
const Message = styled.h1`
  width: 50vw;
  line-height: ${({ theme }) => theme.type.height.lg};
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    width: 100%;
    font-size: ${({ theme }) => theme.type.size.c};
  }
`

const info = () => {
  return (
    <Wrapper>
      <Message>
        Thanks for the info! <br /> <br />
        We&apos;re so excited to be celebrating our special day with you.
      </Message>
      <Button url="/rsvp/yes" label="Submit another" />
      <Button secondary url="/" label="Go home" />
    </Wrapper>
  )
}

export default info
