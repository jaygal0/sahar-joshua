import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  padding: 0.8rem 1.6rem;
  background: ${({ theme }) => theme.color.button.primary.background};
  color: ${({ theme }) => theme.color.button.primary.text};
  font-size: ${({ theme }) => theme.type.size.title.sm};
  text-transform: capitalize;
  width: min-content;
  outline: none;
  border: none;
  border-radius: 0.4rem;

  &:hover {
    cursor: pointer;
  }
`

const Button = ({ cta, link }: { cta: string; link: string }) => {
  return (
    <Link href={link}>
      <Container>{cta}</Container>
    </Link>
  )
}

export default Button
