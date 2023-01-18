import React from 'react'
import styled from 'styled-components'
import { Card } from '../components/Card'

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  background: #faf7f2;
  color: ${({ theme }) => theme.color.black};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`
const TextContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;
  padding: 18.8rem;
  max-width: 1280px;
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;
  width: 100%;
`

const info = () => {
  return (
    <Wrapper>
      <TextContainer>
        <h1>Wedding Information</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
          quaerat commodi sint? Beatae, aspernatur.
        </p>
        <CardWrapper>
          <Card
            heading="Ceremony"
            location="Gunnebo Slott"
            address="Gunnebo Slott och Trädgårdar Christina Halls väg 431 36 Mölndal"
            addressLink="https://www.google.com/maps?q=Gunnebo+Slott+och+Tr%C3%A4dg%C3%A5rdar%0AChristina+Halls+v%C3%A4g%0A431+36+M%C3%B6lndal"
            icon="/image-2.jpg"
          />
          <Card
            heading="Reception"
            location="Grand Plaza"
            address="Säve Flygplatsväg 26, 423 73 Gothenburg, Sweden"
            addressLink="https://www.google.com/maps/place/S%C3%A4ve+Flygplatsv%C3%A4g+26,+423+73+S%C3%A4ve/@57.7776243,11.8623214,17z/data=!3m1!4b1!4m5!3m4!1s0x464f8a4e1813f61d:0xc9111ac196216adb!8m2!3d57.7776243!4d11.8645101"
            icon="/image-2.jpg"
          />
        </CardWrapper>
        <TextWrapper>
          <h3>Important information</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            sed perferendis ratione cum odio quam vitae amet ad? Iste in quasi
            rem. Nostrum, tempore reprehenderit?
          </p>
        </TextWrapper>
        <CardWrapper>
          <Card heading="Dress code" line1="Smart" icon="/image-2.jpg" />{' '}
          <Card
            heading="Gifts"
            line1="Please subscribe to Crouchingbunny.com"
            icon="/image-2.jpg"
          />{' '}
          <Card
            heading="No kids allowed"
            line1="That means you Zara! You're not allowed in!"
            icon="/image-2.jpg"
          />{' '}
        </CardWrapper>
        <TextWrapper>
          <h3>Accomodation</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            sed perferendis ratione cum odio quam vitae amet ad? Iste in quasi
            rem. Nostrum, tempore reprehenderit?
          </p>
        </TextWrapper>
        <CardWrapper>
          <Card
            location="Hotel 1"
            address="Gunnebo Slott och Trädgårdar Christina Halls väg 431 36 Mölndal"
            addressLink="https://www.google.com/maps?q=Gunnebo+Slott+och+Tr%C3%A4dg%C3%A5rdar%0AChristina+Halls+v%C3%A4g%0A431+36+M%C3%B6lndal"
            line1="Great for families"
            icon="/image-2.jpg"
          />{' '}
          <Card
            location="Hotel 2"
            address="Gunnebo Slott och Trädgårdar Christina Halls väg 431 36 Mölndal"
            addressLink="https://www.google.com/maps?q=Gunnebo+Slott+och+Tr%C3%A4dg%C3%A5rdar%0AChristina+Halls+v%C3%A4g%0A431+36+M%C3%B6lndal"
            line1="Great for single people"
            icon="/image-2.jpg"
          />{' '}
          <Card
            location="AirBnb 1"
            address="Gunnebo Slott och Trädgårdar Christina Halls väg 431 36 Mölndal"
            addressLink="https://www.google.com/maps?q=Gunnebo+Slott+och+Tr%C3%A4dg%C3%A5rdar%0AChristina+Halls+v%C3%A4g%0A431+36+M%C3%B6lndal"
            line1="Great for single losers"
            icon="/image-2.jpg"
          />{' '}
          <Card
            location="AirBnb 2"
            address="Gunnebo Slott och Trädgårdar Christina Halls väg 431 36 Mölndal"
            addressLink="https://www.google.com/maps?q=Gunnebo+Slott+och+Tr%C3%A4dg%C3%A5rdar%0AChristina+Halls+v%C3%A4g%0A431+36+M%C3%B6lndal"
            line1="Great for predators "
            icon="/image-2.jpg"
          />{' '}
          <Card
            location="Hotel 3"
            address="Gunnebo Slott och Trädgårdar Christina Halls väg 431 36 Mölndal"
            addressLink="https://www.google.com/maps?q=Gunnebo+Slott+och+Tr%C3%A4dg%C3%A5rdar%0AChristina+Halls+v%C3%A4g%0A431+36+M%C3%B6lndal"
            line1="€€€"
            icon="/image-2.jpg"
          />{' '}
          <Card
            location="Hotel 4"
            address="Gunnebo Slott och Trädgårdar Christina Halls väg 431 36 Mölndal"
            addressLink="https://www.google.com/maps?q=Gunnebo+Slott+och+Tr%C3%A4dg%C3%A5rdar%0AChristina+Halls+v%C3%A4g%0A431+36+M%C3%B6lndal"
            line1="€€€"
            icon="/image-2.jpg"
          />{' '}
        </CardWrapper>
        <TextWrapper>
          <h3>Additional activies</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            sed perferendis ratione cum odio quam vitae amet ad? Iste in quasi
            rem. Nostrum, tempore reprehenderit?
          </p>
        </TextWrapper>
        <CardWrapper>
          <Card
            heading="TBA"
            line1="Date: 19th July 2023"
            line2="More information will be posted "
            icon="/image-2.jpg"
          />{' '}
          <Card
            heading="TBA"
            line1="Date: TBA"
            line2="More information will be posted soon"
            icon="/image-2.jpg"
          />{' '}
        </CardWrapper>
      </TextContainer>
    </Wrapper>
  )
}

export default info
