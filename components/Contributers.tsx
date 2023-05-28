import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const Wrapper = styled.p`
  font-size: ${({ theme }) => theme.type.size.d};
`

interface T {
  name: string
  amount: number
  anonymous: Boolean
  timestamp: string
  merchant: string
}

export const Contributers: React.FC<T> = ({
  name,
  amount,
  anonymous,
  timestamp,
  merchant,
}) => {
  return (
    <>
      {anonymous ? (
        <Wrapper>
          {`Anonymous contributed ${amount} SEK on ${moment(timestamp).format(
            'ddd D, MMM'
          )} via ${merchant}`}
        </Wrapper>
      ) : (
        <Wrapper>
          {`${name} contributed ${amount} SEK on ${moment(timestamp).format(
            'ddd D, MMM'
          )} via ${merchant}`}
        </Wrapper>
      )}
    </>
  )
}
