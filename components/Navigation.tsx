import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.type.size.title.sm};
  font-weight: ${({ theme }) => theme.type.weight.bold};
  color: ${({ theme }) => theme.color.text};
  height: 100vh;
  width: 100vw;
  padding: ${({ theme }) => theme.spacing.md};
  position: relative;
`
const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
`
const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
`
const Menu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.type.size.display.sm};
  background: ${({ theme }) => theme.color.unofficeHours.background};
  height: 100vh;
  width: 100vw;
  transition: transform 0.5s ease-in-out;
  transform: translateY(-200%);

  &.active {
    transform: translateY(-100%);
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  width: min-content;
  font-family: 'Krona One', sans-serif;
  text-transform: capitalize;
  position: relative;
`
const Button = styled.button`
  outline: none;
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.type.size.title.sm};
  font-weight: ${({ theme }) => theme.type.weight.bold};
  color: ${({ theme }) => theme.color.text};

  &:hover {
    cursor: pointer;
  }
`
const Close = styled.button`
  outline: none;
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.type.size.title.sm};
  font-weight: ${({ theme }) => theme.type.weight.bold};
  color: ${({ theme }) => theme.color.text};
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;

  &:hover {
    cursor: pointer;
  }
`

export const Navigation = () => {
  const [transition, setTransition] = useState<boolean>(false)

  return (
    <>
      <Nav>
        <TopRow>
          <Link href="/">home</Link>
          <Button
            onClick={() => {
              setTransition(!transition)
            }}
          >
            Menu
          </Button>
        </TopRow>
        <BottomRow>
          <Link href="/now">/now</Link>
          <Link href="/unoffice-hours">Unoffice Hours</Link>
        </BottomRow>
      </Nav>
      <Menu className={transition ? 'active' : ''}>
        <Close
          onClick={() => {
            setTransition(!transition)
          }}
        >
          Close
        </Close>
        <Wrapper>
          <Link href="/">home</Link>
          <Link href="/projects">projects</Link>
          <Link href="/timeline">timeline</Link>
          <Link href="/blog">blog</Link>
        </Wrapper>
      </Menu>
    </>
  )
}
