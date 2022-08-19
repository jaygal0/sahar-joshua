import React from 'react'
import { Navigation } from '../components/Navigation'
import { IndexMain } from '../styles'

const now = () => {
  return (
    <>
      <Navigation />
      <IndexMain className="now" />
    </>
  )
}

export default now
