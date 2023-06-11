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
  font-size: 8rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 5.6rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: 4.8rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    font-size: ${({ theme }) => theme.type.size.a};
  }
`
const FundedOf = styled.span`
  font-size: 3.2rem;
  opacity: 0.8;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 2.4rem;
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

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    min-width: min-content;
  }
`

const Update = styled.h3`
  font-size: 3.2rem;
  font-weight: 200;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    font-size: 1.6rem;
  }
`

interface T {
  sv?: Boolean
  percentage: number
  goal?: number
  current?: number
  updated?: string
}

export const Progressbar: React.FC<T> = ({
  sv,
  percentage,
  goal,
  current,
  updated,
}) => {
  return (
    <>
      {sv ? (
        <Wrapper>
          <Goal>
            {current?.toLocaleString()} kr{' '}
            <FundedOf>av {goal?.toLocaleString()} kr</FundedOf>
          </Goal>
          <CounterWrapper>
            <Counter percentage={percentage}>{`${percentage.toFixed(
              0
            )}%`}</Counter>
          </CounterWrapper>
          <Update>Senast uppdaterad den: {updated}</Update>
        </Wrapper>
      ) : (
        <Wrapper>
          <Goal>
            {current?.toLocaleString()} kr{' '}
            <FundedOf>out of {goal?.toLocaleString()} kr</FundedOf>
          </Goal>
          <CounterWrapper>
            <Counter percentage={percentage}>{`${percentage.toFixed(
              0
            )}%`}</Counter>
          </CounterWrapper>
          <Update>Last updated on: {updated}</Update>
        </Wrapper>
      )}
    </>
  )
}
