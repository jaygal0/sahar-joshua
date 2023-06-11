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

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    font-size: ${({ theme }) => theme.type.size.d};
  }

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
  &.alt {
    background: ${({ theme }) => theme.color.transparent};
    color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => theme.color.white} 1px solid;

    &:hover {
      cursor: pointer;
      background: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.color.black};
      border-radius: 0.8rem;
    }
  }
`

export const Button = ({
  label,
  url,
  secondary,
  home,
  alt,
}: {
  label: string
  url?: string
  secondary?: Boolean
  home?: Boolean
  alt?: Boolean
}) => {
  return (
    <>
      {url ? (
        <Link href={url}>
          <Btn
            className={
              secondary
                ? 'secondary'
                : home
                ? 'home secondary'
                : alt
                ? 'alt'
                : ''
            }
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
