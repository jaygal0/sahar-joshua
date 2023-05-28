import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  z-index: 2;
  color: ${({ theme }) => theme.color.black};
  margin: 2.4rem 0;
`
const Goal = styled.h3`
  font-size: 5.6rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    font-size: 4.8rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    font-size: ${({ theme }) => theme.type.size.a};
  }
`
const CounterWrapper = styled.div`
  height: min-content;
  background: ${({ theme }) => theme.color.black};
  padding: 0.8rem;
  border-radius: 3.2rem;
  margin-bottom: 1.6rem;
`
const Counter = styled.div<T>`
  border-radius: 3.2rem;
  font-size: ${({ theme }) => theme.type.size.c};
  width: ${(props) =>
    props.percentage >= 100 ? '100%' : `${props.percentage.toFixed(0)}%`};
  height: min-content;
  background: ${(props) =>
    props.percentage >= 0 && props.percentage <= 33
      ? 'yellow'
      : props.percentage > 34 && props.percentage <= 66
      ? 'orange'
      : 'lightgreen'};
  padding: 1.2rem;
  text-align: end;
`

const FundedOf = styled.span`
  font-size: ${({ theme }) => theme.type.size.c};
  opacity: 0.9;
`
const Update = styled.h3`
  font-size: ${({ theme }) => theme.type.size.d};
`

interface T {
  percentage: number
  goal?: number
  current?: number
  updated?: string
}

export const Progressbar: React.FC<T> = ({
  percentage,
  goal,
  current,
  updated,
}) => {
  return (
    <Wrapper>
      <Goal>
        {current?.toLocaleString()} kr{' '}
        <FundedOf>funded of {goal?.toLocaleString()} kr</FundedOf>
      </Goal>
      <CounterWrapper>
        <Counter percentage={percentage}>{`${percentage.toFixed(0)}%`}</Counter>
      </CounterWrapper>
      <Update>Last updated on: {updated}</Update>
    </Wrapper>
  )
}
