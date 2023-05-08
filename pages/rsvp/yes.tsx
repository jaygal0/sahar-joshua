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
  padding: 20vh 0;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  width: 40vw;
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};

  &.flex {
    flex-direction: row;
    align-items: center;
  }
  & label.radio {
    border: ${({ theme }) => theme.color.black} solid 1px;
    background: ${({ theme }) => theme.color.white};
    padding: ${({ theme }) => theme.spacing.xl};
    align-items: center;
    position: relative;
    transition: all 0.4s ease-in-out;

    &:hover {
      cursor: pointer;
      border-radius: 1.6rem;
      scale: 1.05;
    }
  }
`
const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  font-family: Arial, Helvetica, sans-serif;
  transition: all 0.7s ease-in-out;

  &[type='radio'] {
    display: none;
  }
  &[type='radio']:checked + label {
    background: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
  }
`
const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: ${({ theme }) => theme.spacing.sm};
  font-family: Arial, Helvetica, sans-serif;
`

const info = () => {
  return (
    <Wrapper>
      <h1>We’re so excited to celebrate the day with you!</h1>

      <Form action="" method="post">
        <FormContainer>
          <GenericLabel htmlFor="">Full name</GenericLabel>
          <Input
            type="text"
            name="name"
            required
            placeholder="e.g. Joshua Galinato"
          />
        </FormContainer>
        <GenericLabel
          htmlFor=""
          placeholder="Just so we don&amp;t have any issues on the day, please be specific as possible."
        >
          Do you have any food preferences or allergies that we should know
          about?
        </GenericLabel>
        <TextArea />
        <Button label="Submit" url="/rsvp/confirm-yes" />
        <Button secondary label="Submit another" url="/rsvp/submit-another" />
      </Form>
    </Wrapper>
  )
}

export default info
