import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
`

const Nav = () => {
  return (
    <nav>
      <Button secondary label="RSVP" url="/rsvp" />
    </nav>
  )
}

export default Nav
