import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import moment from 'moment'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 986px;
  width: 90vw;
  height: min-content;
  position: relative;
  z-index: 1;
`
const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: ${({ theme }) => theme.color.timeline.background};
`
const DashedLine = styled.div`
  border-left: 2px dashed black;
  width: min-content;
  position: absolute;
  height: 100%;
  top: 0;
  left: 70px;
  z-index: -1;

  &.start {
    height: 50%;
    top: 50%;
  }
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
  width: 70px;
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
  height: min-content;
`
const Heading = styled.h2`
  font-family: 'DM Sans', sans-serif;
  font-size: ${({ theme }) => theme.type.size.title.md};
`
const Desc = styled.p`
  font-size: ${({ theme }) => theme.type.size.body.lg};
`

const Timeline = ({
  start,
  heading,
  desc,
  date,
}: {
  start?: Boolean
  heading: string
  desc: string
  date: string
}) => {
  return (
    <Container>
      <Date>
        <DateWrapper>
          <Image src="/placeholder-timeline.svg" width={32} height={32} />
          <DatesWrapper>
            <Month>{moment(date).format('MMMM')}</Month>
            <Year>{moment(date).format('YYYY')}</Year>
          </DatesWrapper>
        </DateWrapper>
      </Date>
      <DashedLine className={start && 'start'} />
      <Card>
        <Heading>{heading}</Heading>
        <Desc>{desc}</Desc>
      </Card>
    </Container>
  )
}

export default Timeline
