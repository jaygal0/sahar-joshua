import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.color.disabled};
  font-size: ${({ theme }) => theme.type.size.title.lg};
  text-transform: capitalize;
  text-decoration: line-through;
`

const LocationStriked = ({
  city,
  country,
}: {
  city: string
  country: string
}) => {
  return <Container>{`${city}, ${country}`}</Container>
}

export default LocationStriked
