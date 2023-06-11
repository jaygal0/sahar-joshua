import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { ScrollDown } from './ScrollDown'

const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    flex-direction: column;
  }
`
const ImageBackground = styled.div`
  width: 45%;
  background: white;
  display: flex;
  justify-content: center;
  padding: 3.2rem 3.2rem 9.6rem 3.2rem;
  align-items: center;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.12);
  position: relative;
  max-width: 800px;
  animation: LoadIn 1.6s ease-in-out;

  @keyframes LoadIn {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    width: 35%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: 40%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: 70%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonesm}) {
    width: 100%;
  }
`
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`
const TextWrapper = styled.div`
  width: 50%;
  padding: 8rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    width: 90%;
    padding: 1.6rem;
    text-align: center;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonemd}) {
    width: 100%;
  }
`
const Heading = styled.h1`
  opacity: 0;
  font-size: 9.6rem;
  animation: TextLoadIn ease-in 2.4s 1s forwards;

  @keyframes TextLoadIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desklg}) {
    font-size: 7.2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 6.4rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    font-size: 4.8rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    font-size: 3.2rem;
  }
`
const Date = styled.p`
  opacity: 0;
  font-size: 4.8rem;
  animation: TextLoadIn ease-in 2.4s 1s forwards;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desklg}) {
    font-size: 3.2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: 1.6rem;
  }
`
const Timestamp = styled.p`
  position: absolute;
  bottom: -1.6rem;
  font-size: 5.6rem;
  width: 100%;
  text-align: center;
  font-family: 'Delicious Handrawn', cursive;

  & span {
    font-size: 9.6rem;
    margin-left: 2.4rem;

    @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
      font-size: 6.4rem;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 4.8rem;
    bottom: 0rem;
  }
`

export const HeroIndex = ({ lang }: { lang?: string }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCount((oldCount: number) => {
        if (oldCount == 9) {
          return (oldCount = 0)
        } else {
          return oldCount + 1
        }
      })
    }, 1000)

    return () => {
      clearInterval(id)
    }
  }, [])
  return (
    <>
      {lang == 'sv' ? (
        <Wrapper>
          <ImageBackground>
            <ImageWrapper>
              <Image
                src={
                  count == 1
                    ? '/image-2014.jpg'
                    : count == 2
                    ? '/image-2015.jpg'
                    : count == 3
                    ? '/image-2016.jpg'
                    : count == 4
                    ? '/image-2017.jpg'
                    : count == 5
                    ? '/image-2018.jpg'
                    : count == 6
                    ? '/image-2019.jpg'
                    : count == 7
                    ? '/image-2020.jpg'
                    : count == 8
                    ? '/image-2021.jpg'
                    : count == 9
                    ? '/image-2022.jpg'
                    : '/image-2013.jpg'
                }
                layout="fill"
                objectFit="cover"
                priority
                alt="Images of Sahar & Josh together over the years"
              />
            </ImageWrapper>
            {count == 1 ? (
              <Timestamp>
                S + J <span>2014</span>
              </Timestamp>
            ) : count == 2 ? (
              <Timestamp>
                S + J <span>2015</span>
              </Timestamp>
            ) : count == 3 ? (
              <Timestamp>
                S + J <span>2016</span>
              </Timestamp>
            ) : count == 4 ? (
              <Timestamp>
                S + J <span>2017</span>
              </Timestamp>
            ) : count == 5 ? (
              <Timestamp>
                S + J <span>2018</span>
              </Timestamp>
            ) : count == 6 ? (
              <Timestamp>
                S + J <span>2019</span>
              </Timestamp>
            ) : count == 7 ? (
              <Timestamp>
                S + J <span>2020</span>
              </Timestamp>
            ) : count == 8 ? (
              <Timestamp>
                S + J <span>2021</span>
              </Timestamp>
            ) : count == 9 ? (
              <Timestamp>
                S + J <span>2022</span>
              </Timestamp>
            ) : (
              <Timestamp>
                S + J <span>2013</span>
              </Timestamp>
            )}
          </ImageBackground>
          <TextWrapper>
            <Date>Den 22 Juli 2023</Date>
            <Heading>Vi ska äntligen gifta oss!</Heading>
          </TextWrapper>
          <ScrollDown />
        </Wrapper>
      ) : (
        <Wrapper>
          <ImageBackground>
            <ImageWrapper>
              <Image
                src={
                  count == 1
                    ? '/image-2014.jpg'
                    : count == 2
                    ? '/image-2015.jpg'
                    : count == 3
                    ? '/image-2016.jpg'
                    : count == 4
                    ? '/image-2017.jpg'
                    : count == 5
                    ? '/image-2018.jpg'
                    : count == 6
                    ? '/image-2019.jpg'
                    : count == 7
                    ? '/image-2020.jpg'
                    : count == 8
                    ? '/image-2021.jpg'
                    : count == 9
                    ? '/image-2022.jpg'
                    : '/image-2013.jpg'
                }
                layout="fill"
                objectFit="cover"
                priority
                alt="Images of Sahar & Josh together over the years"
              />
            </ImageWrapper>
            {count == 1 ? (
              <Timestamp>
                S + J <span>2014</span>
              </Timestamp>
            ) : count == 2 ? (
              <Timestamp>
                S + J <span>2015</span>
              </Timestamp>
            ) : count == 3 ? (
              <Timestamp>
                S + J <span>2016</span>
              </Timestamp>
            ) : count == 4 ? (
              <Timestamp>
                S + J <span>2017</span>
              </Timestamp>
            ) : count == 5 ? (
              <Timestamp>
                S + J <span>2018</span>
              </Timestamp>
            ) : count == 6 ? (
              <Timestamp>
                S + J <span>2019</span>
              </Timestamp>
            ) : count == 7 ? (
              <Timestamp>
                S + J <span>2020</span>
              </Timestamp>
            ) : count == 8 ? (
              <Timestamp>
                S + J <span>2021</span>
              </Timestamp>
            ) : count == 9 ? (
              <Timestamp>
                S + J <span>2022</span>
              </Timestamp>
            ) : (
              <Timestamp>
                S + J <span>2013</span>
              </Timestamp>
            )}
          </ImageBackground>
          <TextWrapper>
            <Date>On July 22nd 2023</Date>
            <Heading>We&#39;re finally getting married!</Heading>
          </TextWrapper>
          <ScrollDown />
        </Wrapper>
      )}
    </>
  )
}
