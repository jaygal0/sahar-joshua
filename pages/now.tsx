import React from 'react'
import Heading from '../components/Heading'
import { Navigation } from '../components/Navigation'
import { IndexMain } from '../styles'

const now = ({ dbs }: { dbs: any }) => {
  const { data } = dbs

  console.log(data[0])
  console.log(data[1])
  console.log(data[2])

  return (
    <>
      <Navigation />
      <IndexMain className="now">
        <Heading
          title="/now"
          text="This is where I play. Curabitur odio pellentesque rhoncus dignissim dolor, morbi imperdiet. Pretium lectus sed a euismod nisl a tempus amet, ipsum."
        />
      </IndexMain>
    </>
  )
}

export default now

export async function getServerSideProps(context: any) {
  const site = process.env.WEB_SITE

  const res = await fetch(`${site}/api/now`)
  const dbs = await res.json()

  if (!dbs) {
    return {
      notfound: true,
    }
  }

  return {
    props: { dbs },
  }
}
