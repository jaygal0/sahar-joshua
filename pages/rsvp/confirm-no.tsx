import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../styles'
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
        You're information has been submitted. Hopefully, we'll get to spend
        time with you sometime in the near future!
      </Message>
    </Wrapper>
  )
}

export default info
