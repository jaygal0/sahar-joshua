import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { GenericLabel } from '../../styles'

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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

const No = () => {
  return (
    <Wrapper>
      <h1>Such a shame that you can't make it, but we understand!</h1>
      <p>Please fill in your name for our information.</p>
      <Form action="" method="post">
        <FormContainer>
          <GenericLabel htmlFor="">Full name</GenericLabel>
          <input type="text" name="name" required />
        </FormContainer>
        <Button label="Submit" />
      </Form>
    </Wrapper>
  )
}

export default No
