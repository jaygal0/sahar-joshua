import React from 'react'
import Heading from '../../components/Heading'
import Label from '../../components/Label'
import Card from '../../components/Card'
import { Navigation } from '../../components/Navigation'
import { BodyText, IndexMain, TechStack } from '../../styles'
import Button from '../../components/Button'
import Image from 'next/image'
import styled from 'styled-components'

const galinato = ({ dbs }: { dbs: any }) => {
  const { data } = dbs

  const project = 'galina.to'

  return (
    <>
      <Navigation />
      <IndexMain className="now">
        {data.map((item: any) => {
          if (item.title == project) {
            return (
              <Heading key={item._id} title={item.title} text={item.text} />
            )
          }
        })}
        <Card>
          <Label text="Apps Used" />
          {data.map((item: any) => {
            if (item.title == project) {
              return item.techStack
                .sort((a: any, b: any) => {
                  if (a > b) {
                    return 1
                  } else {
                    return -1
                  }
                })
                .map((program: any, index: string) => {
                  return <TechStack key={index}>{program}</TechStack>
                })
            }
          })}
        </Card>
        <Card padding>
          <Label text="defining the problem" />
          <Image
            src="/dummy-image.png"
            layout="responsive"
            width={16}
            height={9}
            objectFit="cover"
          />
          <BodyText>
            This is body text to let you know that I'm the best in the world
          </BodyText>
          <Button cta="CTA" link="" />
        </Card>
        <Card>
          <Label text="getting to work" />
          <Image
            src="/dummy-image.png"
            layout="responsive"
            width={16}
            height={9}
            objectFit="cover"
          />
          <BodyText>
            This is body text to let you know that I'm the best in the world
          </BodyText>
          <Button cta="CTA" link="" />
        </Card>
        <Card>
          <Label text="laying out the system" />
          <Image
            src="/dummy-image.png"
            layout="responsive"
            width={16}
            height={9}
            objectFit="cover"
          />
          <BodyText>
            This is body text to let you know that I'm the best in the world
          </BodyText>
          <Button cta="CTA" link="" />
        </Card>
        <Card>
          <Label text="developing the idea" />
          <Image
            src="/dummy-image.png"
            layout="responsive"
            width={16}
            height={9}
            objectFit="cover"
          />
          <BodyText>
            This is body text to let you know that I'm the best in the world
          </BodyText>
          <Button cta="CTA" link="" />
        </Card>
      </IndexMain>
    </>
  )
}

export default galinato

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
