import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { FlexWrapper } from '../styles'

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: flex-end;
  z-index: 100;
  background: rgba(250, 247, 242, 0.9);
  backdrop-filter: blur(4px);

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    position: static;
    background: ${({ theme }) => theme.color.background};
    padding: ${({ theme }) => theme.spacing.sm};
  }
`

const Nav = ({ info }: { info?: Boolean }) => {
  return (
    <Navbar>
      {info ? (
        <FlexWrapper>
          <Button label="Contribute" url="/contribute" />
          <Button secondary label="RSVP" url="/rsvp" />
        </FlexWrapper>
      ) : (
        <Button home label="RSVP" url="/rsvp" />
      )}
    </Navbar>
  )
}

export default Nav
