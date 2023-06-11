import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { IndexLink } from './IndexLink'

const WrapperTwo = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  padding: 12rem 5.6rem;
  max-width: 1920px;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    padding: 2.4rem 3.2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    padding: 2.4rem 1.6rem;
  }
`
const TitlesWrapper = styled.div`
  width: 80%;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    width: 100%;
  }
`

const ImageBackground = styled.div`
  width: 40%;
  background: white;
  display: flex;
  justify-content: center;
  padding: 3.2rem 3.2rem 9.6rem 3.2rem;
  align-items: center;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.12);

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    display: none;
  }
`
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`

export const IndexLinks = ({ lang }: { lang?: string }) => {
  return (
    <>
      {lang == 'sv' ? (
        <WrapperTwo>
          <TitlesWrapper>
            <IndexLink
              link="/sv/schedule"
              title="Schema"
              desc="Kika på vad vi kommer att göra under brollopsdagen"
              image="/arrow.svg"
            />
            <IndexLink
              link="/sv/activities"
              title="Aktivitiater"
              desc="Spendera tid med oss innan och efter brollopet."
              image="/arrow.svg"
            />
            <IndexLink
              link="/sv/gift"
              title="Gåva"
              desc="Bidra en gåva till vår smekmånad"
              image="/arrow.svg"
            />
          </TitlesWrapper>
          <ImageBackground>
            <ImageWrapper>
              <Image
                src="/image-2022.jpg"
                layout="fill"
                objectFit="cover"
                alt="Sahar & Josh"
                placeholder="blur"
              />
            </ImageWrapper>
          </ImageBackground>
        </WrapperTwo>
      ) : (
        <WrapperTwo>
          <TitlesWrapper>
            <IndexLink
              link="/en/schedule"
              title="Schedule"
              desc="A perfect plan for unforgettable moments."
              image="/arrow.svg"
            />
            <IndexLink
              link="/en/activities"
              title="Activities"
              desc="Spend time with us before &amp; after the wedding!"
              image="/arrow.svg"
            />
            <IndexLink
              link="/en/gift"
              title="Gift"
              desc="Contribut to our honeymoon fund"
              image="/arrow.svg"
            />
          </TitlesWrapper>
          <ImageBackground>
            <ImageWrapper>
              <Image
                src="/image-2022.jpg"
                layout="fill"
                objectFit="cover"
                alt="Sahar & Josh"
                placeholder="blur"
              />
            </ImageWrapper>
          </ImageBackground>
        </WrapperTwo>
      )}
    </>
  )
}
