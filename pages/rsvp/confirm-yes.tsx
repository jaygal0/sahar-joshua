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
`
const Message = styled.h1`
  width: 50vw;
  line-height: ${({ theme }) => theme.type.height.lg};
  text-align: center;
`

const info = () => {
  return (
    <Wrapper>
      <Message>
        Thanks for the info! <br /> <br />
        We're so excited to be celebrating our special day with you.
      </Message>
      <Button secondary url="/info" label="View information" />
    </Wrapper>
  )
}

export default info
