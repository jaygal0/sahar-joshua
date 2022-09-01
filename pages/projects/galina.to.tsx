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
            In previous versions of this website, the data, text and images
            derived from the source files itself. This meant that whenever I
            wanted to make a small change in text, I had to open up VS Code and
            push my latest commit to Github for the changes to take effect.
            Since I was updating my site regularly you could see how tidious
            this could get. I needed a better way of working.
            <br />
          </BodyText>
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
            Once I sorted out the logic and how I was going to connect this site
            to a database, it was a matter of redesigning the website to work
            effectively with the different technologies involved.
          </BodyText>
          <Button
            cta="View Figma File"
            link="https://www.figma.com/file/EI5KVwwDI858pVO578ZX7N/galina.to-v2.0?node-id=2409%3A5758"
          />
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
            Creating a level of consistency in design requires attention to
            detail as well as a strong design language. Just with every project
            I work on, I try to build on good foundations by making sure a good
            design system is in place.
          </BodyText>
          <Button
            cta="View design system"
            link="https://www.figma.com/file/EI5KVwwDI858pVO578ZX7N/galina.to-v2.0?node-id=1410%3A18"
          />
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
            As always, I translate my designs to code and develop everything
            myself. Since I was pulling all the data from a database, it took a
            bit of time to understand the logic, but by doing so it helped me
            become a better developer.
          </BodyText>
          <Button
            cta="View source code"
            link="https://github.com/jaygal0/galina.to"
          />
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
