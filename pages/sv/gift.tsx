import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import data from '../../data/contributions'
import { Progressbar } from '../../components/Progressbar'
import { Payment } from '../../components/Payment'
import { Milestones } from '../../components/Milestones'
import { Hero } from '../../components/Hero'
import Nav from '../../components/NavSV'
import lastUpdated from '../../data/lastUpdated'

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
  const ms1 = 30000
  const ms2 = 10000
  const ms3 = 10000
  const ms4 = 30000
  const ms5 = 15000
  // const ms6 = 3000

  const target = ms1 + ms2 + ms3 + ms4 + ms5

  let updated = moment(lastUpdated[0].date).format('MMM D [at] hh:mm')

  const sumall = data
    .map((item) => item.amount)
    .reduce((prev, curr) => prev + curr, 0)

  const currentPercentage = (sumall / target) * 100

  return (
    <>
      <Nav alt />
      <main>
        <Hero
          heading="Smekmånad"
          desc="Din närvaro betyder mest, men om du vill bidra, hjälp oss att skapa oförglömliga minnen i Japan."
          background="/japan1.jpg"
          img="/image-7.jpg"
        />
        <Wrapper>
          <Progressbar
            sv
            percentage={currentPercentage}
            goal={target}
            current={sumall}
            updated={updated}
          />
          <Milestones
            sv
            sumall={sumall}
            ms1={ms1}
            ms2={ms2}
            ms3={ms3}
            ms4={ms4}
            ms5={ms5}
            // ms6={ms6}
          />
          <Payment sv />
        </Wrapper>
      </main>
    </>
  )
}

export default info
