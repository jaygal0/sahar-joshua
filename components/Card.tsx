import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: block;
  width: 65vw;
  background: white;
  border: 2px solid black;
  padding: 8.8rem;
  border-radius: 8.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 4rem;
  font-size: ${({ theme }) => theme.type.size.body.md};
  max-width: 986px;

  &.increase-gap {
    gap: 2.4rem;
  }
`

const Card = ({ children, padding }: { children: any; padding?: boolean }) => {
  return <Div className={padding ? 'increase-gap' : ''}>{children}</Div>
}

export default Card
