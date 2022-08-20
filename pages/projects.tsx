import React from 'react'
import Heading from '../components/Heading'
import { Navigation } from '../components/Navigation'
import { IndexMain } from '../styles'

const projects = ({ dbs }: { dbs: any }) => {
  const { data } = dbs

  console.log(data[0])

  return (
    <>
      <Navigation />
      <IndexMain className="projects">
        <Heading
          title="projects"
          text="This is where I play. Curabitur odio pellentesque rhoncus dignissim dolor, morbi imperdiet. Pretium lectus sed a euismod nisl a tempus amet, ipsum."
        />
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
