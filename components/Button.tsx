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

  &.home {
    opacity: 0;
    animation: buttonFadeIn 2s ease-in-out 7s forwards;

    @keyframes buttonFadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  &.secondary {
    background: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};

    &:hover {
      cursor: pointer;
      filter: brightness(0.7);
      border-radius: 0.8rem;
    }
  }
`

export const Button = ({
  label,
  url,
  secondary,
  home,
}: {
  label: string
  url?: string
  secondary?: Boolean
  home?: Boolean
}) => {
  return (
    <>
      {url ? (
        <Link href={url}>
          <Btn
            className={secondary ? 'secondary' : home ? 'home secondary' : ''}
          >
            {label}
          </Btn>
        </Link>
      ) : (
        <Btn>{label}</Btn>
      )}
    </>
  )
}
