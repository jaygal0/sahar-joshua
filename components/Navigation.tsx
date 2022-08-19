import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const NavContainer = styled.nav`
  position: relative;
`
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.type.size.title.sm};
  font-weight: ${({ theme }) => theme.type.weight.bold};
  color: ${({ theme }) => theme.color.text};
  height: 100vh;
  width: 100vw;
  padding: ${({ theme }) => theme.spacing.md};
  position: fixed;
  top: 0;
  z-index: 1;

  &.active {
    position: static;
  }
`
const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
`
const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
`
interface Div {
  color?: any
}

const SlideOutMenu = styled.div<Div>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.type.size.display.sm};
  background: ${(props) =>
    props.color == 'home'
      ? '#FFFDFB'
      : props.color == 'projects'
      ? '#EEF1F6'
      : props.color == 'timeline'
      ? '#DBE7E4'
      : props.color == 'blog'
      ? '#D6E2E9'
      : '#FFE5D9'};
  height: 100vh;
  width: 100vw;
  transition: all 0.5s ease-in-out;
  transform: translateY(-200%);
  z-index: 2;
  position: fixed;

  &.active {
    transform: translateY(-0);
  }
`
const ColorDiv = styled.div`
  &:hover {
    cursor: pointer;
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
  const [isOffSet, setIsOffSet] = useState<boolean>(false)
  const [backgroundColor, IsBackgroundColor] = useState<string>('')

  return (
    <NavContainer>
      <Nav className={isOffSet ? '' : ''}>
        <TopRow>
          <Link href="/">home</Link>
          <Button
            onClick={() => {
              setIsOffSet(!isOffSet)
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
      <SlideOutMenu
        color={
          backgroundColor == 'home'
            ? 'home'
            : backgroundColor == 'projects'
            ? 'projects'
            : backgroundColor == 'timeline'
            ? 'timeline'
            : backgroundColor == 'blog'
            ? 'blog'
            : ''
        }
        className={isOffSet ? 'active' : ''}
      >
        <Close
          onClick={() => {
            setIsOffSet(!isOffSet)
          }}
        >
          Close
        </Close>
        <Wrapper>
          <Link href="/">
            <ColorDiv
              onMouseEnter={() => {
                IsBackgroundColor('home')
              }}
              onMouseLeave={() => {
                IsBackgroundColor('')
              }}
            >
              home
            </ColorDiv>
          </Link>
          <Link href="/projects">
            <ColorDiv
              onMouseEnter={() => {
                IsBackgroundColor('projects')
              }}
              onMouseLeave={() => {
                IsBackgroundColor('')
              }}
            >
              projects
            </ColorDiv>
          </Link>
          <Link href="/timeline">
            <ColorDiv
              onMouseEnter={() => {
                IsBackgroundColor('timeline')
              }}
              onMouseLeave={() => {
                IsBackgroundColor('')
              }}
            >
              timeline
            </ColorDiv>
          </Link>{' '}
          <Link href="/blog">
            <ColorDiv
              onMouseEnter={() => {
                IsBackgroundColor('blog')
              }}
              onMouseLeave={() => {
                IsBackgroundColor('')
              }}
            >
              blog
            </ColorDiv>
          </Link>{' '}
        </Wrapper>
      </SlideOutMenu>
    </NavContainer>
  )
}
