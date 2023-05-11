import React, { useState } from 'react'
import { useRouter } from 'next/router'
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

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`
const Heading = styled.h1`
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    text-align: center;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    width: 100%;
    font-size: ${({ theme }) => theme.type.size.b};
  }
`
const Text = styled.p`
  font-size: ${({ theme }) => theme.type.size.c};
  margin-top: -3.2rem;
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    font-size: ${({ theme }) => theme.type.size.d};
    text-align: center;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    font-size: ${({ theme }) => theme.type.size.d};
    width: 100%;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  width: 40vw;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: 80%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    width: 100%;
  }
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
  const [isPending, setIsPending] = useState<Boolean>(false)
  const router = useRouter()
  const [data, setData] = useState({
    name: '',
    info: '',
    rsvp: 'No',
  })
  const { name, info, rsvp } = data

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      setIsPending(true)
      await fetch(
        'https://v1.nocodeapi.com/joshsiara78032/google_sheets/dpmpnEpKGPKUJxSr?tabId=RSVP',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([
            [name, info, rsvp, new Date().toLocaleString()],
          ]),
        }
      )
      router.push('/rsvp/confirm-no')
      setIsPending(false)
      setData({ ...data, name: '', info: '' })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {!isPending ? (
        <Wrapper>
          <Heading>
            It's a shame that you can't make it, but we understand!
          </Heading>
          <Text>Please fill in the form so we can update our information.</Text>

          <Form onSubmit={handleSubmit}>
            <FormContainer>
              <GenericLabel htmlFor="name">Full name</GenericLabel>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                required
                placeholder="e.g. Joshua Galinato"
              />
            </FormContainer>
            <GenericLabel
              htmlFor="info"
              placeholder="Just so we don&amp;t have any issues on the day, please be specific as possible."
            >
              Is there anything else you want to mention?
            </GenericLabel>
            <TextArea
              name="info"
              value={info}
              onChange={handleChange}
              placeholder="Write a message or let us know who else can't attend."
            />
            <Button label="Submit" />
          </Form>
        </Wrapper>
      ) : (
        <Wrapper>
          <h1>Please wait...</h1>
        </Wrapper>
      )}
    </>
  )
}

export default info
