import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { IndexMain, IndexWrapper } from '../styles'
import { TextWrapper } from '../components/TextWrapper'
import { Polaroid } from '../components/Polaroid'
import { Images } from '../components/Images'

const Home: NextPage = () => {
  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(10)

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId)
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft])
  return (
    <>
      <IndexMain className={timeLeft <= 3 ? 'scrollLock' : ''}>
        <Images />
        <IndexWrapper>
          <Polaroid />
          <TextWrapper />
        </IndexWrapper>
      </IndexMain>
    </>
  )
}

export default Home
