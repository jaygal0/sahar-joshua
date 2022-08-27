import moment from 'moment'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'

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

  &.hasImage {
    &:hover {
      cursor: pointer;
    }
  }
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
  transition: all ease-in-out 0.2s;
  box-shadow: 0px 0px 3px #c6d0e1;
  top: 0;
  left: 0;

  &.hasImage {
    &:hover {
      cursor: pointer;
      box-shadow: 15px 15px 0 -3px #c6d0e1;
      top: -7px;
      left: -7px;
    }
  }
`
const Heading = styled.h2`
  font-family: 'DM Sans', sans-serif;
  font-size: ${({ theme }) => theme.type.size.title.md};
`
const Desc = styled.p`
  font-size: ${({ theme }) => theme.type.size.body.lg};
`
const ImageWrapper = styled.div`
  width: 0%;
  opacity: 0;
  transition: all ease-in-out 0.3s;

  &.isClicked {
    width: 100%;
    opacity: 1;
  }
`
const Expand = styled.button`
  font-size: ${({ theme }) => theme.type.size.body.md};
  align-self: flex-start;
  padding-top: 10%;
  background: none;
  border: none;
  opacity: 0;
  transition: opacity ease-in-out 0.3s;
  width: 2rem;

  &.hover {
    cursor: pointer;
    opacity: 1;
  }
`

const Timeline = ({
  start,
  heading,
  desc,
  date,
  category,
  image,
}: {
  start?: Boolean
  heading: string
  desc: string
  date: string
  category: string
  image?: string
}) => {
  const [isHovered, setIsHovered] = useState<Boolean>(false)
  const [isClicked, setIsClicked] = useState<Boolean>(false)

  return (
    <Container
      onMouseEnter={() => {
        setIsHovered(!isHovered)
      }}
      onMouseLeave={() => {
        setIsHovered(!isHovered)
      }}
      onClick={() => {
        setIsClicked(!isClicked)
      }}
      className={image && 'hasImage'}
    >
      <Date>
        <DateWrapper>
          <Image
            // TODO: Need to make sure that I sort out the logic here with all the different icons that need to be used
            src={category == '/work.svg' ? '' : '/placeholder-timeline.svg'}
            width={32}
            height={32}
          />
          <DatesWrapper>
            <Month>{moment(date).format('MMMM')}</Month>
            <Year>{moment(date).format('YYYY')}</Year>
          </DatesWrapper>
        </DateWrapper>
      </Date>
      <DashedLine className={start && 'start'} />
      <Card className={image && 'hasImage'}>
        <Heading>{heading}</Heading>
        <Desc>{desc}</Desc>
        {image ? (
          <ImageWrapper className={isClicked && 'isClicked'}>
            <Image
              src={`/${image}`}
              layout="responsive"
              width={16}
              height={9}
              objectFit="cover"
            />
          </ImageWrapper>
        ) : null}
      </Card>
      <Expand className={isHovered && image && 'hover'}>
        {isClicked ? 'collapse' : 'expand'}
      </Expand>
    </Container>
  )
}

export default Timeline
