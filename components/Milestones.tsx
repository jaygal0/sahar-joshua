import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Milestone } from './Milestone'
import { log } from 'console'

const Wrapper = styled.div`
  width: 100%;
  margin: 8rem 0;
`
const Heading = styled.h2`
  font-size: 5.6rem;
  margin-bottom: 0.8rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 3.2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: 2.4rem;
  }
`
const MileStoneWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  margin: ${({ theme }) => theme.spacing.md} 0;
  gap: 2.4rem;
`
interface T {
  sv?: Boolean
  ms1: number
  ms2: number
  ms3: number
  ms4: number
  ms5: number
  ms6?: number
  sumall: number
}

export const Milestones: React.FC<T> = ({
  sv,
  ms1,
  ms2,
  ms3,
  ms4,
  ms5,
  ms6,
  sumall,
}) => {
  const [isMilestone1, setIsMilestone1] = useState<Boolean>(false)
  const [isMilestone2, setIsMilestone2] = useState<Boolean>(false)
  const [isMilestone3, setIsMilestone3] = useState<Boolean>(false)
  const [isMilestone4, setIsMilestone4] = useState<Boolean>(false)
  const [isMilestone5, setIsMilestone5] = useState<Boolean>(false)
  const [isMilestone6, setIsMilestone6] = useState<Boolean>(false)

  const [isReachedMs1, setIsReachedMs1] = useState<Boolean>(false)
  const [isReachedMs2, setIsReachedMs2] = useState<Boolean>(false)
  const [isReachedMs3, setIsReachedMs3] = useState<Boolean>(false)
  const [isReachedMs4, setIsReachedMs4] = useState<Boolean>(false)
  const [isReachedMs5, setIsReachedMs5] = useState<Boolean>(false)
  const [isReachedMs6, setIsReachedMs6] = useState<Boolean>(false)

  useEffect(() => {
    if (sumall >= ms1) {
      setIsMilestone1(true)
    }
    if (sumall >= ms1 + ms2) {
      setIsMilestone2(true)
    }
    if (sumall >= ms1 + ms2 + ms3) {
      setIsMilestone3(true)
    }
    if (sumall >= ms1 + ms2 + ms3 + ms4) {
      setIsMilestone4(true)
    }
    if (sumall >= ms1 + ms2 + ms3 + ms4 + ms5) {
      setIsMilestone5(true)
    }
    // if (sumall >= ms1 + ms2 + ms3 + ms4 + ms5 + ms6) {
    //   setIsMilestone6(true)
    // }

    /////////////////

    if (ms1 - sumall <= 0) {
      setIsReachedMs1(false)
    } else if (ms1 - sumall < ms1) {
      setIsReachedMs1(true)
    }
    if (ms1 + ms2 - sumall > ms2) {
      setIsReachedMs2(false)
    } else if (ms2 + ms2 - sumall <= ms1 + ms2) {
      setIsReachedMs2(true)
    }
    if (ms1 + ms2 + ms3 - sumall > ms3) {
      setIsReachedMs3(false)
    } else if (ms2 + ms2 + ms3 - sumall <= ms1 + ms2 + ms3) {
      setIsReachedMs3(true)
    }
    if (ms1 + ms2 + ms3 + ms4 - sumall > ms4) {
      setIsReachedMs4(false)
    } else if (ms2 + ms2 + ms3 + ms4 - sumall <= ms1 + ms2 + ms3 + ms4) {
      setIsReachedMs4(true)
    }
    if (ms1 + ms2 + ms3 + ms4 + ms5 - sumall > ms5) {
      setIsReachedMs5(false)
    } else if (
      ms1 + ms2 + ms3 + ms4 + ms5 - sumall <=
      ms1 + ms2 + ms3 + ms4 + ms5
    ) {
      setIsReachedMs5(true)
    }
    // if (ms1 + ms2 + ms3 + ms4 + ms5 + ms6 - sumall > ms6) {
    //   setIsReachedMs6(false)
    // } else if (
    //   ms1 + ms2 + ms3 + ms4 + ms5 + ms6 - sumall <=
    //   ms1 + ms2 + ms3 + ms4 + ms5 + ms6
    // ) {
    //   setIsReachedMs6(true)
    // }
  }, [])

  return (
    <>
      {sv ? (
        <Wrapper>
          <Heading>Varje bidrag hjälper till att låsa upp en milstolpe</Heading>
          <MileStoneWrapper>
            <Milestone
              sv
              title="#1 Flyg till Japan"
              amount={ms1}
              image="/flights.jpg"
              check={isMilestone1}
              isMsReached={isReachedMs1}
              msCalc={ms1 - sumall}
              isZero={ms1 - sumall <= 0}
              isFirst
            />

            <Milestone
              sv
              title="#2 En vecka i Kyoto, Japan"
              amount={ms2}
              image="/kyoto.jpg"
              check={isMilestone2}
              isMsReached={isReachedMs2}
              msCalc={ms1 + ms2 - sumall}
              isZero={ms1 + ms2 - sumall <= 0}
            />
            <Milestone
              sv
              title=" #3 En vecka i Osaka, Japan"
              amount={ms3}
              image="http://www.anaexperienceclass.com/wp-content/uploads/2019/05/shutterstock_434007868-1800x1200.jpg"
              check={isMilestone3}
              isMsReached={isReachedMs3}
              msCalc={ms1 + ms2 + ms3 - sumall}
              isZero={ms1 + ms2 + ms3 - sumall <= 0}
            />
            <Milestone
              sv
              title="#4 En vecka i Tokyo, Japan"
              amount={ms4}
              image="/tokyo.jpg"
              check={isMilestone4}
              isMsReached={isReachedMs4}
              msCalc={ms1 + ms2 + ms3 + ms4 - sumall}
              isZero={ms1 + ms2 + ms3 + ms4 - sumall <= 0}
            />
            <Milestone
              sv
              title="#5 En vecka i Seoul, Korea"
              amount={ms5}
              image="/seoul.jpg"
              check={isMilestone5}
              isMsReached={isReachedMs5}
              msCalc={ms1 + ms2 + ms3 + ms4 + ms5 - sumall}
              isZero={ms1 + ms2 + ms3 + ms4 + ms5 - sumall <= 0}
            />
            {/* <Milestone
          title="#6 ???"
          amount={ms6}
          image="/image-1.jpg"
          check={isMilestone6}
          isMsReached={isReachedMs6}
          msCalc={ms1 + ms2 + ms3 + ms4 + ms5 + ms6 - sumall}
          isZero={ms1 + ms2 + ms3 + ms4 + ms5 + ms6 - sumall <= 0}
        /> */}
          </MileStoneWrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          <Heading>Every contribution helps unlock a milestone</Heading>
          <MileStoneWrapper>
            <Milestone
              en
              title="#1 Flight to Japan"
              amount={ms1}
              image="/flights.jpg"
              check={isMilestone1}
              isMsReached={isReachedMs1}
              msCalc={ms1 - sumall}
              isZero={ms1 - sumall <= 0}
              isFirst
            />
            <Milestone
              en
              title="#2 One week in Kyoto, Japan"
              amount={ms2}
              image="/kyoto.jpg"
              check={isMilestone2}
              isMsReached={isReachedMs2}
              msCalc={ms1 + ms2 - sumall}
              isZero={ms1 + ms2 - sumall <= 0}
            />
            <Milestone
              en
              title=" #3 One week in Osaka, Japan"
              amount={ms3}
              image="http://www.anaexperienceclass.com/wp-content/uploads/2019/05/shutterstock_434007868-1800x1200.jpg"
              check={isMilestone3}
              isMsReached={isReachedMs3}
              msCalc={ms1 + ms2 + ms3 - sumall}
              isZero={ms1 + ms2 + ms3 - sumall <= 0}
            />
            <Milestone
              en
              title="#4 One week in Tokyo, Japan"
              amount={ms4}
              image="/tokyo.jpg"
              check={isMilestone4}
              isMsReached={isReachedMs4}
              msCalc={ms1 + ms2 + ms3 + ms4 - sumall}
              isZero={ms1 + ms2 + ms3 + ms4 - sumall <= 0}
            />
            <Milestone
              en
              title="#5 One week in Seoul, Korea"
              amount={ms5}
              image="/seoul.jpg"
              check={isMilestone5}
              isMsReached={isReachedMs5}
              msCalc={ms1 + ms2 + ms3 + ms4 + ms5 - sumall}
              isZero={ms1 + ms2 + ms3 + ms4 + ms5 - sumall <= 0}
            />
            {/* <Milestone
          title="#6 ???"
          amount={ms6}
          image="/image-1.jpg"
          check={isMilestone6}
          isMsReached={isReachedMs6}
          msCalc={ms1 + ms2 + ms3 + ms4 + ms5 + ms6 - sumall}
          isZero={ms1 + ms2 + ms3 + ms4 + ms5 + ms6 - sumall <= 0}
        /> */}
          </MileStoneWrapper>
        </Wrapper>
      )}
    </>
  )
}
