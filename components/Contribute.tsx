import React from 'react'
import styled from 'styled-components'
import { Contributers } from './Contributers'
import data from '../data/contributions'

const Wrapper = styled.div``

export const Contribute = () => {
  return (
    <Wrapper>
      <h3>Recent Contributers</h3>
      {data
        .map((contributor: any, index: any) => {
          const { name, amount, timestamp, anonymous, merchant } = contributor

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
    </Wrapper>
  )
}
