import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.type.size.title.lg};
  color: ${({ theme }) => theme.color.text};
`

export const Navigation = () => {
  return (
    <List>
      <Link href="/">home</Link>
      <Link href="/projects">projects</Link>
      <Link href="/timeline">timeline</Link>
      <Link href="/blog">blog</Link>
      <Link href="/unoffice-hours">unoffice hours</Link>
      <Link href="/now">/now</Link>
    </List>
  )
}
