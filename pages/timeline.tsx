import React from 'react'
import Heading from '../components/Heading'
import { Navigation } from '../components/Navigation'
import { IndexMain } from '../styles'

const timeline = () => {
  return (
    <>
      <Navigation />
      <IndexMain className="timeline">
        <Heading
          title="timeline"
          text="This is where I play. Curabitur odio pellentesque rhoncus dignissim dolor, morbi imperdiet. Pretium lectus sed a euismod nisl a tempus amet, ipsum."
        />
      </IndexMain>
    </>
  )
}

export default timeline
