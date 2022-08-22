import React from 'react'
import Heading from '../components/Heading'
import Label from '../components/Label'
import Card from '../components/Card'
import LocationStriked from '../components/LocationStriked'
import LocationNow from '../components/LocationNow'
import { Navigation } from '../components/Navigation'
import { ExternalLink, IndexMain } from '../styles'
import ProfessionStriked from '../components/ProfessionStriked'
import ProfessionNow from '../components/ProfessionNow'
import NowText from '../components/NowText'
import Age from '../components/Age'
import DeathCount from '../components/DeathCount'

const now = ({ dbs, lichess }: { dbs: any; lichess: any }) => {
  const { data } = dbs

  return (
    <>
      <Navigation />
      <IndexMain className="now">
        {data.map((item: any) => {
          if (item.category == 'now') {
            return (
              <Heading
                title="What I'm up to now"
                text={item.text}
                now={item.dateAdded}
              />
            )
          }
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
                <NowText
                  key={item._id}
                  main={item.title}
                  secondary={`By ${item.author}`}
                />
              )
            }
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
