import React from 'react'
import styled from 'styled-components'
import Nav from '../../components/NavSV'
import { CardTimeline } from '../../components/CardTimeline'
import data from '../../data/timelineSV'
import { Hero } from '../../components/Hero'

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
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

const schedule = () => {
  return (
    <>
      <Nav alt />
      <main>
        <Hero
          heading="Vår bröllopsdag"
          desc="En perfekt plan för oförglömliga stunder."
          background="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fspokhus.se%2Fwp-content%2Fuploads%2F2015%2F11%2FGunnebo_slott_September_2012_11.jpg&f=1&nofb=1&ipt=13ede279c65b6fc7f1e3caa4c4a3c2a5c50ddde91237a5fee0a3083f91aeb2ff&ipo=images"
        />
        <Wrapper>
          <TextContainer>
            {data.map((event: any, index: any) => {
              const { heading, description, time, icon, location, link } = event
              return (
                <CardTimeline
                  key={index}
                  heading={heading}
                  description={description}
                  time={time}
                  icon={icon}
                  location={location}
                  link={link}
                />
              )
            })}
          </TextContainer>
        </Wrapper>
      </main>
    </>
  )
}

export default schedule
