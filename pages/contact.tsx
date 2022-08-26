import React from 'react'
import { Navigation } from '../components/Navigation'
import { IndexMain } from '../styles'
import Heading from '../components/Heading'

const contact = () => {
  return (
    <>
      <Navigation />
      <IndexMain className="blog">
        <Heading
          title="contact"
          text="For any business inquiries, you can email me at: josh[at]galina.to"
        />
      </IndexMain>
    </>
  )
}

export default contact
