import React from 'react'
import styled from 'styled-components'

const Heading = styled.h2`
  font-family: 'DM Sans', sans-serif;
  font-size: ${({ theme }) => theme.type.size.title.md};
  font-weight: ${({ theme }) => theme.type.weight.normal};
  text-transform: capitalize;
`

const Label = ({ text }: { text: string }) => {
  return <Heading>{text}</Heading>
}

export default Label
