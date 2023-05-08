import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Btn = styled.button`
  font-size: ${({ theme }) => theme.type.size.c};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: transparent;
  border: ${({ theme }) => theme.color.black} solid 1px;
  transition: all ease-in-out 0.4s;
  border-radius: 0;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    border-radius: 0.8rem;
  }
`

export const Button = ({ label, url }: { label: string; url?: string }) => {
  return (
    <>
      {url ? (
        <Link href={url}>
          <Btn>{label}</Btn>
        </Link>
      ) : (
        <Btn>{label}</Btn>
      )}
    </>
  )
}
