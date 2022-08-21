import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
const NumAndLabel = styled.div`
  font-family: 'Share Tech Mono', monospace;
`
const Num = styled.div`
  font-size: ${({ theme }) => theme.type.size.display.sm};
  line-height: ${({ theme }) => theme.type.height.sm};
`
const Label = styled.div`
  font-family: 'DM Sans', sans-serif;
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.type.size.body.md};
  line-height: ${({ theme }) => theme.type.height.sm};
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 0.5px;
`

const DeathCount = () => {
  // Death Clock Countdown
  const [timerYears, setTimerYears] = useState<number>(0)
  const [timerMonths, setTimerMonths] = useState<number>(0)
  const [timerDays, setTimerDays] = useState<number>(0)
  const [timerHours, setTimerHours] = useState<number>(0)
  const [timerMinutes, setTimerMinutes] = useState<number>(0)
  const [timerSeconds, setTimerSeconds] = useState<number>(0)

  let interval: any = useRef()

  const startTimer = () => {
    const countdownDate = new Date('October 8, 2080 00:00:00').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now

      const yearsCount: number = Math.floor(
        distance / (1000 * 60 * 60 * 24 * 365)
      )
      const monthsCount: number = Math.floor(
        distance / (1000 * 60 * 60 * 24 * 30)
      )
      const daysCount: number = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hoursCount: number = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutesCount = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      )
      const secondsCount = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        clearInterval(interval.current)
      } else {
        setTimerYears(yearsCount)
        setTimerMonths(monthsCount)
        setTimerDays(daysCount)
        setTimerHours(hoursCount)
        setTimerMinutes(minutesCount)
        setTimerSeconds(secondsCount)
      }
    }, 1000)
  }

  useEffect(() => {
    startTimer()
    return () => {
      clearInterval(interval.current)
    }
  })

  return (
    <Container>
      <NumAndLabel>
        <Num>
          {timerYears === 0
            ? `00`
            : timerYears < 10
            ? `0${timerYears}`
            : `${timerYears}`}
        </Num>
        <Label>years</Label>
      </NumAndLabel>
      <NumAndLabel>
        <Num>
          {timerMonths === 0
            ? `00`
            : timerMonths > 12
            ? `00`
            : timerMonths < 10
            ? `0${timerMonths}`
            : `${timerMonths}`}
        </Num>
        <Label>months</Label>
      </NumAndLabel>{' '}
      <NumAndLabel>
        <Num>
          {timerDays === 0
            ? `00`
            : timerDays > 31
            ? `00`
            : timerDays < 10
            ? `0${timerDays}`
            : `${timerDays}`}
        </Num>
        <Label>days</Label>
      </NumAndLabel>{' '}
      <NumAndLabel>
        <Num>
          {timerHours === 0
            ? `00`
            : timerHours > 24
            ? `00`
            : timerHours < 10
            ? `0${timerHours}`
            : `${timerHours}`}
        </Num>
        <Label>hours</Label>
      </NumAndLabel>{' '}
      <NumAndLabel>
        <Num>
          {timerMinutes === 0
            ? `00`
            : timerMinutes > 60
            ? `00`
            : timerMinutes < 10
            ? `0${timerMinutes}`
            : `${timerMinutes}`}
        </Num>
        <Label>minutes</Label>
      </NumAndLabel>{' '}
      <NumAndLabel>
        <Num>
          {timerSeconds === 0
            ? `00`
            : timerSeconds < 10
            ? `0${timerSeconds}`
            : `${timerSeconds}`}
        </Num>
        <Label>seconds</Label>
      </NumAndLabel>
    </Container>
  )
}

export default DeathCount
