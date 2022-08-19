import React from 'react'
import Heading from '../components/Heading'
import { Navigation } from '../components/Navigation'
import { IndexMain } from '../styles'

const blog = () => {
  return (
    <>
      <Navigation />
      <IndexMain className="blog">
        <Heading
          title="blog"
          text="This is where I play. Curabitur odio pellentesque rhoncus dignissim dolor, morbi imperdiet. Pretium lectus sed a euismod nisl a tempus amet, ipsum."
        />
      </IndexMain>
    </>
  )
}

export default blog
