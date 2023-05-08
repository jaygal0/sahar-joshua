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
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
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
const RadioWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
`
const RadioLabel = styled.label`
  font-size: ${({ theme }) => theme.type.size.b};
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
        <Container>
          <h3>Select your meal</h3>
          <RadioWrapper>
            <FormContainer className="radioBox">
              <Input
                type="radio"
                name="menuOption"
                value="menu 1"
                id="menu 1"
              />
              <RadioLabel className="radio" htmlFor="menu 1">
                {' '}
                Menu 1 <p>this is a sentence about the food</p>
              </RadioLabel>
            </FormContainer>
            <FormContainer className="radioBox">
              <Input
                type="radio"
                name="menuOption"
                value="menu 2"
                id="menu 2"
              />
              <RadioLabel className="radio" htmlFor="menu 2">
                {' '}
                Menu 2<p>this is a sentence about the food</p>
              </RadioLabel>
            </FormContainer>
            <FormContainer className="radioBox">
              <Input
                type="radio"
                name="menuOption"
                value="menu 3"
                id="menu 3"
              />
              <RadioLabel className="radio" htmlFor="menu 3">
                Menu 3 <p>this is a sentence about the food</p>
              </RadioLabel>
            </FormContainer>
          </RadioWrapper>
          <GenericLabel
            htmlFor=""
            placeholder="Just so we don&amp;t have any issues on the day, please be specific as possible."
          >
            Do you have any allergies that we should know about?
          </GenericLabel>
          <TextArea />
        </Container>
        <Button label="Submit" url="/rsvp/submit-another" />
      </Form>
    </Wrapper>
  )
}

export default info
