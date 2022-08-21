import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  width: 65vw;
  background: white;
  border: 1px solid black;
  padding: 8.8rem;
  border-radius: 8.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 4rem;
  font-size: ${({ theme }) => theme.type.size.body.md};
`

const CardStriked = ({ children }: { children: any }) => {
  return <Div>{children}</Div>
}

export default CardStriked
