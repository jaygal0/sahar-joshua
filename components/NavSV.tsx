import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: ${({ theme }) => theme.spacing.lg} 5.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  transition: all 0.4s ease-in-out;
  color: ${({ theme }) => theme.color.black};

  &.main {
    color: ${({ theme }) => theme.color.black};
    background: rgba(250, 247, 242, 0.8);
    backdrop-filter: blur(4px);
  }
  &.mainScroll {
    color: ${({ theme }) => theme.color.white};
    background: #3b3834e7;
    backdrop-filter: blur(4px);
  }
  &.alt {
    color: ${({ theme }) => theme.color.white};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    padding: ${({ theme }) => theme.spacing.xs} 5.6rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.sm} 5.6rem;
    gap: 1.6rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonemd}) {
    padding: ${({ theme }) => theme.spacing.sm} 1.6rem;
  }
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    gap: 7.2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    justify-content: space-around;
    gap: 4.8rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonemd}) {
    width: 100%;
    justify-content: center;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonesm}) {
    gap: 0.8rem;
    flex-wrap: wrap;
  }
`
const LogoWrapper = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    width: 40px;
    height: 40px;
  }
`
const Page = styled.div`
  font-size: 3.2rem;
  transition: all 0.7s ease-in-out;
  padding-bottom: 2px;
  font-weight: 400;

  &.main {
    border-bottom: 2px solid;
    padding-bottom: 2px;
  }
  &:hover {
    border-bottom: 2px solid;
    padding-bottom: 2px;
    cursor: pointer;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desklg}) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 1.6rem;
  }
`

const Nav = ({ alt }: { alt?: Boolean }) => {
  const [isScroll, setIsScroll] = useState<Boolean>(false)

  const onScroll = useCallback((event: any) => {
    if (window.scrollY == 0) {
      setIsScroll(false)
    } else if (window.scrollY >= 20) {
      setIsScroll(true)
    }
  }, [])

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener('scroll', onScroll, { passive: true })
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const router = useRouter()
  const [current, setCurrent] = useState(router.pathname)
  useEffect(() => {
    setCurrent(router.pathname)
  }, [router.pathname])

  return (
    <header>
      {alt ? (
        <Navbar className={isScroll ? 'main' : 'alt'}>
          <Link href="/sv">
            <LogoWrapper>
              {isScroll ? (
                <Image
                  src="/heart-black.svg"
                  layout="fill"
                  objectFit="cover"
                  priority
                  alt="heart-logo"
                />
              ) : (
                <Image
                  src="/heart-white.svg"
                  layout="fill"
                  objectFit="cover"
                  alt="heart-logo"
                  priority
                />
              )}
            </LogoWrapper>
          </Link>
          <Wrapper>
            <Link href="/sv">
              <Page className={current == '/sv' ? 'main' : ''}>Hem</Page>
            </Link>
            <Link href="/sv/schedule">
              <Page className={current == '/sv/schedule' ? 'main' : ''}>
                Schema
              </Page>
            </Link>
            <Link href="/sv/activities">
              <Page className={current == '/sv/activities' ? 'main' : ''}>
                Aktiviteter
              </Page>
            </Link>
            <Link href="/sv/gift">
              <Page className={current == '/sv/gift' ? 'main' : ''}>Gåva</Page>
            </Link>
          </Wrapper>
        </Navbar>
      ) : (
        <Navbar className={isScroll ? 'mainScroll' : 'main'}>
          <Link href="/sv">
            <LogoWrapper>
              {isScroll ? (
                <Image
                  src="/heart-white.svg"
                  layout="fill"
                  objectFit="cover"
                  priority
                  alt="heart-logo"
                />
              ) : (
                <Image
                  src="/heart-black.svg"
                  layout="fill"
                  objectFit="cover"
                  priority
                  alt="heart-logo"
                />
              )}
            </LogoWrapper>
          </Link>
          <Wrapper>
            <Link href="/sv">
              <Page className={current == '/sv' ? 'main' : ''}>Hem</Page>
            </Link>
            <Link href="/sv/schedule">
              <Page className={current == '/sv/schedule' ? 'main' : ''}>
                Schema
              </Page>
            </Link>
            <Link href="/sv/activities">
              <Page className={current == '/sv/activities' ? 'main' : ''}>
                Aktiviteter
              </Page>
            </Link>
            <Link href="/sv/gift">
              <Page className={current == '/sv/gift' ? 'main' : ''}>Gåva</Page>
            </Link>
          </Wrapper>
        </Navbar>
      )}
    </header>
  )
}

export default Nav
