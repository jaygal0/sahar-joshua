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

const info = () => {
  return (
    <Wrapper>
      <h1>Are you attending the wedding?</h1>
      <FlexWrapper>
        <Button label="Yes" url="/rsvp/yes" />
        <Button label="No" url="/rsvp/no" />
      </FlexWrapper>
    </Wrapper>
  )
}

export default info
