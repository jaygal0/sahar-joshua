import React, { useEffect, useState } from 'react'
import Age from '../components/Age'
import Card from '../components/Card'
import DeathCount from '../components/DeathCount'
import Heading from '../components/Heading'
import Label from '../components/Label'
import LocationNow from '../components/LocationNow'
import LocationStriked from '../components/LocationStriked'
import { Navigation } from '../components/Navigation'
import NowText from '../components/NowText'
import ProfessionNow from '../components/ProfessionNow'
import ProfessionStriked from '../components/ProfessionStriked'
import { ExternalLink, IndexMain } from '../styles'
import Meta from '../components/Meta'

const now = ({ dbs, dbsNowText, dbsNowReading, lichess }: any) => {
  const { data } = dbs
  const firstDocument = 0

  return (
    <>
      <Meta title="Now" />
      <Navigation />
      <IndexMain className="now">
        {/* <Heading
          key={dbsNowText.data[firstDocument]._id}
          title="What I'm up to now"
          text={dbsNowText.data[firstDocument].text}
          now={dbsNowText.data[firstDocument].date}
        /> */}
        <Card isIcon age>
          <Label text="age" />
          <Age />
        </Card>
        <Card isIcon death>
          <Label text="estimated time left to live" />
          <div>
            A reminder of my mortality. Data taken from{' '}
            <ExternalLink href="https://www.death-clock.org/" target="_blank">
              The Death Clock
            </ExternalLink>
          </div>
          <DeathCount />
        </Card>
        <Card isIcon location>
          <Label text="location" />
          {data
            .filter((item: any) => {
              if (item.category == 'location' && !item.current) {
                return item
              }
            })
            .map((item: any) => {
              return (
                <LocationStriked
                  key={item._id}
                  city={item.city}
                  country={item.country}
                />
              )
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
        <Card isIcon profession>
          <Label text="profession" />
          {data
            .filter((item: any) => {
              if (item.category == 'profession' && !item.current) {
                return item
              }
            })
            .map((item: any) => {
              return (
                <ProfessionStriked
                  key={item._id}
                  job={item.job}
                  company={item.company}
                />
              )
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
        <Card isIcon book>
          <Label text="reading" />
          {/* <NowText
            key={dbsNowReading.data[firstDocument]._id}
            main={dbsNowReading.data[firstDocument].title}
            secondary={`By ${dbsNowReading.data[firstDocument].author}`}
          /> */}
        </Card>
        <Card isIcon chess>
          <Label text="Chess Rating" />
          <NowText main={`Rapid: ${lichess.perfs.rapid.rating}`} chess />
        </Card>
      </IndexMain>
    </>
  )
}

export default now

export async function getStaticProps(context: any) {
  const site = process.env.WEB_SITE

  const res = await fetch(`${site}/api/now`)
  const dbs = await res.json()
  if (!dbs) {
    return {
      notfound: true,
    }
  }
  // const resNowText = await fetch(`${site}/api/nowText`)
  // const dbsNowText = await resNowText.json()
  // if (!dbsNowText) {
  //   return {
  //     notfound: true,
  //   }
  // }
  // const resNowReading = await fetch(`${site}/api/nowReading`)
  // const dbsNowReading = await resNowReading.json()
  // if (!dbsNowReading) {
  //   return {
  //     notfound: true,
  //   }
  // }
  const resChess = await fetch(`https://lichess.org/api/account`, {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  })
  const lichess = await resChess.json()
  if (!lichess) {
    return {
      notFound: true,
    }
  }

  return {
    props: { dbs, lichess },
    revalidate: 10,
  }
}
