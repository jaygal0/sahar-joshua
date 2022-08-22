import React from 'react'
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
  // To figure out my age
  let a = moment(new Date())
  let b = moment([1989, 6, 30])

  let years = a.diff(b, 'year')
  b.add(years, 'years')

  let months = a.diff(b, 'months')
  b.add(months, 'months')

  let days = a.diff(b, 'days')

  return (
    <Container>
      <NumAndLabel>
        <Num>{years === 0 ? `00` : years < 10 ? `0${years}` : `${years}`}</Num>
        <Label>years</Label>
      </NumAndLabel>
      <NumAndLabel>
        <Num>
          {months === 0 ? `00` : months < 10 ? `0${months}` : `${months}`}
        </Num>
        <Label>months</Label>
      </NumAndLabel>{' '}
      <NumAndLabel>
        <Num>{days === 0 ? `00` : days < 10 ? `0${days}` : `${days}`}</Num>
        <Label>days</Label>
      </NumAndLabel>{' '}
      <NumAndLabel className="disabled">
        <Num>00</Num>
        <Label>hours</Label>
      </NumAndLabel>{' '}
      <NumAndLabel className="disabled">
        <Num>00</Num>
        <Label>minutes</Label>
      </NumAndLabel>{' '}
      <NumAndLabel className="disabled">
        <Num>00</Num>
        <Label>seconds</Label>
      </NumAndLabel>
    </Container>
  )
}

export default Age
