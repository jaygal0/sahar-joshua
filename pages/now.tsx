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

const now = ({ dbs, lichess }: { dbs: any; lichess: any }) => {
  const { data } = dbs

  return (
    <>
      <Navigation />
      <IndexMain className="now">
        {data
          .filter((item: any) => {
            if (item.category == 'now') {
              return item
            }
          })
          .map((item: any) => {
            return (
              <Heading
                key={item._id}
                title="What I'm up to now"
                text={item.text}
                now={item.dateAdded}
              />
            )
          })}
        <Card>
          <Label text="age" />
          <Age />
        </Card>
        <Card>
          <Label text="est. time of death" />
          <div>
            A reminder of my mortality. Data taken from{' '}
            <ExternalLink href="https://www.death-clock.org/" target="_blank">
              The Death Clock
            </ExternalLink>
          </div>
          <DeathCount />
        </Card>
        <Card>
          <Label text="location" />
          {data
            .filter((item: any) => {
              if (item.category == 'location' && !item.curren) {
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
        <Card>
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
        <Card>
          <Label text="reading" />
          {data
            .filter((item: any) => {
              if (item.category == 'reading') {
                return item
              }
            })
            .map((item: any) => {
              return (
                <NowText
                  key={item._id}
                  main={item.title}
                  secondary={`By ${item.author}`}
                />
              )
            })}
        </Card>
        <Card>
          <Label text="Chess Rating" />
          <NowText main={`Rapid: ${lichess.perfs.rapid.rating}`} chess />
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
  }
}
