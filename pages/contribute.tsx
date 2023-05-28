import React, { useEffect, useState } from 'react'
import moment from 'moment'
import styled from 'styled-components'
import Image from 'next/image'
import data from '../data/contributions'
import { Progressbar } from '../components/Progressbar'
import { Payment } from '../components/Payment'
import { Milestones } from '../components/Milestones'
import Nav from '../components/Nav'

const Circle = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 100%;
  border: 3px solid ${({ theme }) => theme.color.white};
  z-index: 2;
  width: 100px;
  height: 100px;
`
const HeroWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-image: url('/japan1.jpg');
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: #1a1a1adf;
  position: absolute;
  left: 0;
  z-index: 1;
`
const Heading = styled.h1`
  text-align: start;
  font-size: 5.6rem;
  z-index: 2;
  color: ${({ theme }) => theme.color.white};
`
const Text = styled.p`
  width: 70%;
  font-size: ${({ theme }) => theme.type.size.b};
  z-index: 2;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 7.2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: ${({ theme }) => theme.type.size.c};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    width: 100%;
  }
`
const Wrapper = styled.div`
  padding: 5% 10%;
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  background: #faf7f2;
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`

const info = () => {
  // UPDATE THESE FIGURES ONLY
  const lastUpdated = '2023-05-24T08:15'

  const ms1 = 32000
  const ms2 = 3000
  const ms3 = 3000
  const ms4 = 3000
  const ms5 = 6000
  const ms6 = 3000

  const target = ms1 + ms2 + ms3 + ms4 + ms5 + ms6
  /////////////////////////////

  let updated = moment(lastUpdated).format('ddd D, MMM [at] hh:mm')

  const sumall = data
    .map((item) => item.amount)
    .reduce((prev, curr) => prev + curr, 0)

  const currentPercentage = (sumall / target) * 100

  return (
    <>
      <HeroWrapper>
        <Heading>Honeymoon fund to Asia 🇯🇵</Heading>
        <Text>
          The most important thing is that you are able to celebrate our wedding
          day with us. However, if you wish to give a gift, we will gratefully
          accept a contribution towards our honeymoon.
        </Text>
        <Circle>
          <Image
            src="/image-7.jpg"
            width={100}
            height={100}
            objectFit="cover"
          />
        </Circle>

        <Background />
      </HeroWrapper>
      <Wrapper>
        <Progressbar
          percentage={currentPercentage}
          goal={target}
          current={sumall}
          updated={updated}
        />
        <Milestones
          sumall={sumall}
          ms1={ms1}
          ms2={ms2}
          ms3={ms3}
          ms4={ms4}
          ms5={ms5}
          ms6={ms6}
        />
        <Payment />

        {/* <ContributerWrapper>
          <h3>Recent Contributers</h3>
          {data
            .map((contributor: any, index: any) => {
              const { name, amount, timestamp, anonymous, merchant } =
                contributor

              return (
                <Contributers
                  key={index}
                  name={name}
                  amount={amount}
                  anonymous={anonymous}
                  timestamp={timestamp}
                  merchant={merchant}
                />
              )
            })
            .sort((a: any, b: any) => {
              return a.props.timestamp < b.props.timestamp ? 1 : -1
            })}
        </ContributerWrapper> */}
      </Wrapper>
    </>
  )
}

export default info
