import React from 'react'
import CardProject from '../components/CardProject'
import Heading from '../components/Heading'
import { Navigation } from '../components/Navigation'
import { IndexMain } from '../styles'
const projects = ({ dbs }: { dbs: any }) => {
  const { data } = dbs

  return (
    <>
      <Navigation />
      <IndexMain className="projects">
        <Heading
          title="projects"
          text="This is where I play. Curabitur odio pellentesque rhoncus dignissim dolor, morbi imperdiet. Pretium lectus sed a euismod nisl a tempus amet, ipsum."
        />
        <CardProject logo="jg" />
        <CardProject logo="cpb" />
      </IndexMain>
    </>
  )
}

export default projects

export async function getServerSideProps(context: any) {
  const site = process.env.WEB_SITE

  const res = await fetch(`${site}/api/projects`)
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
