import React, { useState, useEffect } from 'react'
import moment from 'moment'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const NumAndLabel = styled.div`
  font-family: 'Share Tech Mono', monospace;
  &.disabled {
    opacity: 0.1;
  }
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

const Age = () => {
  let a = moment(new Date())
  let b = new Date(1989, 6, 30, 15, 15, 0, 0)

  var diffDuration = moment.duration(a.diff(b))

  const [years, setYears] = useState<number>(0)
  const [months, setMonths] = useState<number>(0)
  const [days, setDays] = useState<number>(0)
  const [hours, setHours] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)

  useEffect(() => {
    const countdown = setInterval(() => {
      setYears(diffDuration.years())
      setMonths(diffDuration.months())
      setDays(diffDuration.days())
      setHours(diffDuration.hours())
      setMinutes(diffDuration.minutes())
      setSeconds(diffDuration.seconds())
    }, 1000)
    return () => clearInterval(countdown)
  })

  function addLeadingZeros(num: number, totalLength: number) {
    return String(num).padStart(totalLength, '0')
  }

  return (
    <Container>
      <NumAndLabel>
        <Num>{addLeadingZeros(years, 2)}</Num>
        <Label>years</Label>
      </NumAndLabel>
      <NumAndLabel>
        <Num>{addLeadingZeros(months, 2)}</Num>
        <Label>months</Label>
      </NumAndLabel>{' '}
      <NumAndLabel>
        <Num>{addLeadingZeros(days, 2)}</Num>
        <Label>days</Label>
      </NumAndLabel>{' '}
      <NumAndLabel>
        <Num>{addLeadingZeros(hours, 2)}</Num>
        <Label>hours</Label>
      </NumAndLabel>{' '}
      <NumAndLabel>
        <Num>{addLeadingZeros(minutes, 2)}</Num>
        <Label>minutes</Label>
      </NumAndLabel>{' '}
      <NumAndLabel>
        <Num>{addLeadingZeros(seconds, 2)}</Num>
        <Label>seconds</Label>
      </NumAndLabel>
    </Container>
  )
}

export default Age
