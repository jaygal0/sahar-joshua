import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  padding: 0.8rem 1.6rem;
  background: ${({ theme }) => theme.color.button.primary.background};
  color: ${({ theme }) => theme.color.button.primary.text};
  font-size: ${({ theme }) => theme.type.size.body.lg};
  text-transform: capitalize;
  width: max-content;
  outline: none;
  border: none;
  border-radius: 0.4rem;

  &:hover {
    cursor: pointer;
  }
`
const ALink = styled.a`
  &.flex-start {
    align-self: flex-start;
    margin-left: 3.2rem;
  }
`

const Button = ({
  cta,
  link,
  flex,
}: {
  cta: string
  link: string
  flex?: Boolean
}) => {
  return (
    <ALink href={link} target="_blank" className={flex && 'flex-start'}>
      <Container>{cta}</Container>
    </ALink>
  )
}

export default Button
