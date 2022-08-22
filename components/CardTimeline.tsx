import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 45vw;
  width: 40vw;
`
const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
`
const DatesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  width: min-content;
`
const Month = styled.div`
  font-size: ${({ theme }) => theme.type.size.body.lg};
  font-weight: ${({ theme }) => theme.type.weight.bold};
`
const Year = styled.div`
  font-size: ${({ theme }) => theme.type.size.body.md};
`
const Card = styled.div`
  background: ${({ theme }) => theme.color.timeline.box};
  border: 2px solid black;
  padding: 8.8rem;
  border-radius: 8.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 4rem;
  font-size: ${({ theme }) => theme.type.size.body.md};
  flex-grow: 1;
`
const Heading = styled.h2`
  font-family: 'DM Sans', sans-serif;
  font-size: ${({ theme }) => theme.type.size.title.md};
`
const Desc = styled.p`
  font-size: ${({ theme }) => theme.type.size.body.lg};
`

const Timeline = () => {
  return (
    <Container>
      <DateWrapper>
        <Image src="/placeholder-timeline.svg" width={32} height={32} />
        <DatesWrapper>
          <Month>month</Month>
          <Year>year</Year>
        </DatesWrapper>
      </DateWrapper>
      <Card>
        <Heading>This is a heading</Heading>
        <Desc>this is a subtitle</Desc>
      </Card>
    </Container>
  )
}

export default Timeline
