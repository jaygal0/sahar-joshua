import React from 'react'
import CardProject from '../components/CardProject'
import Heading from '../components/Heading'
import Meta from '../components/Meta'
import { Navigation } from '../components/Navigation'
import { IndexMain } from '../styles'

const projects = ({ dbs }: { dbs: any }) => {
  const { data } = dbs

  return (
    <>
      <Meta title="Projects" />
      <Navigation />
      <IndexMain className="projects">
        <Heading
          title="projects"
          text="In my spare time I like to design and develop apps that interest me. Whether it's fulfilling a real need or allowing me to be creative, each project has helped me get better at my craft."
        />
        {data.map((project: any) => {
          return (
            <CardProject
              key={project._id}
              logo={project.title}
              url={project.title}
            />
          )
        })}
      </IndexMain>
    </>
  )
}

export default projects

export async function getStaticProps(context: any) {
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
