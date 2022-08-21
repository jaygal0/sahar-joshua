import React from 'react'
import Heading from '../components/Heading'
import Label from '../components/Label'
import Card from '../components/Card'
import LocationStriked from '../components/LocationStriked'
import LocationNow from '../components/LocationNow'
import { Navigation } from '../components/Navigation'
import { IndexMain } from '../styles'
import ProfessionStriked from '../components/ProfessionStriked'
import ProfessionNow from '../components/ProfessionNow'
import ReadingNow from '../components/ReadingNow'

const now = ({ dbs }: { dbs: any }) => {
  const { data } = dbs

  return (
    <>
      <Navigation />
      <IndexMain className="now">
        <Heading
          title="/now"
          text="This is where I play. Curabitur odio pellentesque rhoncus dignissim dolor, morbi imperdiet. Pretium lectus sed a euismod nisl a tempus amet, ipsum."
        />
        <Card>
          <Label text="location" />
          {data.map((item: any) => {
            if (item.category == 'location' && !item.current) {
              return (
                <LocationStriked
                  key={item._id}
                  city={item.city}
                  country={item.country}
                />
              )
            }
          })}
          {data.map((item: any) => {
            if (item.category == 'location' && item.current) {
              return (
                <LocationNow
                  key={item._id}
                  city={item.city}
                  country={item.country}
                />
              )
            }
          })}
        </Card>
        <Card>
          <Label text="profession" />
          {data.map((item: any) => {
            if (item.category == 'profession' && !item.current) {
              return (
                <ProfessionStriked
                  key={item._id}
                  job={item.job}
                  company={item.company}
                />
              )
            }
          })}
          {data.map((item: any) => {
            if (item.category == 'profession' && item.current) {
              return (
                <ProfessionNow
                  key={item._id}
                  job={item.job}
                  company={item.company}
                />
              )
            }
          })}
        </Card>
        <Card>
          <Label text="reading" />
          {data.map((item: any) => {
            if (item.category == 'reading') {
              return (
                <ReadingNow
                  key={item._id}
                  title={item.title}
                  author={item.author}
                />
              )
            }
          })}
        </Card>
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
