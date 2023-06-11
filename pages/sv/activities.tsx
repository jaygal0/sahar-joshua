import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Button'
import { GenericLabel } from '../../styles'
import { Activity } from '../../components/Activity'
import { Hero } from '../../components/Hero'
import Nav from '../../components/NavSV'

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

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`
const TextContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 5.6rem 18.8rem;
  max-width: 1880px;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    padding: 5.6rem 3.2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    max-width: 100vw;
    padding: 4.8rem 1.6rem;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    flex-direction: column;
  }
`
const ActivitiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  width: 100%;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  align-self: flex-start;
  position: sticky;
  top: 16rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    top: 10rem;
  }

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
  font-size: 2.4rem;

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

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 1.6rem;
    width: 100%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 1.6rem;
  }
`
const Input = styled.input`
  font-size: inherit;
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
const Select = styled.select`
  font-size: inherit;
  padding: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`
const TextArea = styled.textarea`
  font-size: inherit;
  width: 100%;
  height: 150px;
  padding: ${({ theme }) => theme.spacing.sm};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2.4rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 1.6rem;
  }
`
const Confirmation = styled.h3`
  padding: 5.6rem 2.4rem;
`

const Activities = () => {
  const [isPending, setIsPending] = useState<Boolean>(false)
  const [data, setData] = useState({
    eventSelect: '',
    name: '',
    questions: '',
  })
  const [isSubmit, setIsSubmit] = useState<Boolean>(false)

  const { eventSelect, name, questions } = data

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      setIsPending(true)
      await fetch(
        'https://v1.nocodeapi.com/joshsiara78032/google_sheets/dpmpnEpKGPKUJxSr?tabId=Activities',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([
            [eventSelect, name, questions, new Date().toLocaleString()],
          ]),
        }
      )
      setIsPending(false)
      setData({ ...data, eventSelect: '', name: '', questions: '' })
      setIsSubmit(true)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Nav alt />
      <Hero
        heading="Bortom bröllopet"
        desc="Oförglömliga aktiviteter före och efter firandet."
        background="https://images.ctfassets.net/nwbqij9m1jag/38hRL7WIE9rtOM70PvExQa/495333740976e59a21d29e9b8d909a3a/azaleadalen-slotsskogen-steampipe-production-studio-ab-goteborgco.jpg"
      />
      {!isPending ? (
        <Wrapper>
          <TextContainer>
            <Container>
              <ActivitiesWrapper>
                <Activity
                  sv
                  heading="Innan bröllopet; BBQ Fun"
                  desc="Kom hem till oss, där vi njuter av BBQ, drinkar och spel tillsammans."
                  image="/bbq.jpg"
                  date="Torsdag 20:e Juli, 16:00"
                  location="Brinketorpsvägen 11, Partille"
                  locationLink="https://goo.gl/maps/VXBWC8G76HjX8AVT7"
                />
                <Activity
                  sv
                  heading="Efter bröllopet; Picknick Delight"
                  desc="Följ med oss till en park för en härlig picknick och lekar."
                  image="/picnic.jpg"
                  date="Sondag 23:e Juli, 13:30 - 18:00"
                  location="Slottskogen"
                  locationLink="https://www.google.com/maps/place/Slottsskogen,+Gothenburg/@57.6867614,11.9296993,15z/data=!3m1!4b1!4m6!3m5!1s0x464ff33b655951cd:0x79a8df64b0f8f91f!8m2!3d57.6839662!4d11.9439226!16s%2Fg%2F1tk_mwm_?entry=ttu"
                />
              </ActivitiesWrapper>
              {isSubmit == false ? (
                <Form onSubmit={handleSubmit}>
                  <FormContainer>
                    <GenericLabel htmlFor="eventSelect">
                      Vilken aktivitet kommer du till?
                    </GenericLabel>
                    <Select
                      name="eventSelect"
                      id="eventSelect"
                      onChange={(e: any) => {
                        setData({ ...data, [e.target.name]: e.target.value })
                      }}
                      value={eventSelect}
                    >
                      <option value="">-- Välj ett val --</option>
                      <option value="both">Båda!</option>
                      <option value="bbq">BBQ</option>
                      <option value="picnic">Picknik</option>
                    </Select>
                    <GenericLabel htmlFor="name">Vem kommer?</GenericLabel>
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
                    htmlFor="questions"
                    placeholder="Just so we don&amp;t have any issues on the day, please be specific as possible."
                  >
                    Har du några frågor?
                  </GenericLabel>
                  <TextArea
                    name="questions"
                    value={questions}
                    onChange={handleChange}
                    placeholder="Berätta för oss dina tankar..."
                  />
                  <Button label="Skicka" />
                </Form>
              ) : (
                <Confirmation>
                  Tack för att du skickade in! Vi hör av oss snart!
                </Confirmation>
              )}
            </Container>
          </TextContainer>
        </Wrapper>
      ) : (
        <Wrapper>
          <h1>Vänta...</h1>
        </Wrapper>
      )}
    </>
  )
}

export default Activities
