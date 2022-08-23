import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const NavContainer = styled.nav`
  position: relative;
  z-index: 99;
`
const Logo = styled.div`
  font-size: ${({ theme }) => theme.type.size.title.sm};
  font-weight: ${({ theme }) => theme.type.weight.bold};
  color: ${({ theme }) => theme.color.text};
  position: fixed;
  top: 2.4rem;
  left: 2.4rem;
`
const Menu = styled.button`
  outline: none;
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.type.size.title.sm};
  font-weight: ${({ theme }) => theme.type.weight.bold};
  color: ${({ theme }) => theme.color.text};
  position: fixed;
  top: 2.4rem;
  right: 2.4rem;

  &:hover {
    cursor: pointer;
  }
`
const Now = styled.div`
  font-size: ${({ theme }) => theme.type.size.title.sm};
  font-weight: ${({ theme }) => theme.type.weight.bold};
  color: ${({ theme }) => theme.color.text};
  position: fixed;
  bottom: 2.4rem;
  left: 2.4rem;
`
const UnofficeHours = styled.div`
  font-size: ${({ theme }) => theme.type.size.title.sm};
  font-weight: ${({ theme }) => theme.type.weight.bold};
  color: ${({ theme }) => theme.color.text};
  position: fixed;
  bottom: 2.4rem;
  right: 2.4rem;
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
      <Logo>
        <Link href="/">home</Link>
      </Logo>
      <Menu
        onClick={() => {
          setIsOffSet(!isOffSet)
        }}
      >
        Menu
      </Menu>
      <Now>
        <Link href="/now">/now</Link>
      </Now>
      <UnofficeHours>
        <Link href="/unoffice-hours">Unoffice Hours</Link>
      </UnofficeHours>
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
        <Wrapper
          onClick={() => {
            setIsOffSet(!isOffSet)
          }}
        >
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
