import React, { useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    width: 48%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    width: 100%;
  }
`
const ImageWrapper = styled.div`
  position: relative;
  border-radius: 1.6rem;
  height: 350px;
  position: relative;
  overflow: hidden;
  border-radius: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    border: 4px pink solid;
    box-shadow: 0 0 10px pink;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desklg}) {
    height: 250px;
  }
`
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: #1a1a1a8b;
  position: absolute;
  left: 0;
`
const TextWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`
const Text = styled.p`
  font-size: 4rem;
  padding: 1.6rem 2.4rem;
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 212, 255, 0) 100%
  );
  z-index: 5;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desklg}) {
    font-size: 3.2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 2.4rem;
  }
`
const Amount = styled.p`
  font-size: 5.6rem;
  padding: 0.8rem 0.8rem 0 0.8rem;
  color: ${({ theme }) => theme.color.black};
  width: max-content;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &.complete {
    text-decoration: line-through;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desklg}) {
    font-size: 4rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 3.2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    font-size: ${({ theme }) => theme.type.size.c};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    font-size: ${({ theme }) => theme.type.size.b};
  }
`
const Unlock = styled.p`
  font-size: 3.2rem;
  padding: 0.8rem 0.8rem 0 0.8rem;
  width: max-content;
  padding: 0.8rem 0.8rem 0 0.8rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desklg}) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desklg}) {
    font-size: 2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    font-size: ${({ theme }) => theme.type.size.d};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    font-size: ${({ theme }) => theme.type.size.c};
  }
`
const MilestoneReached = styled.p`
  position: absolute;
  top: 1.6rem;
  padding: 0.8rem 1.6rem;
  margin: 0 auto;
  background: #aeefae;
  color: ${({ theme }) => theme.color.black};
  z-index: 2;
  border-radius: 4px;
`

interface T {
  sv?: Boolean
  en?: Boolean
  title: string
  image: string
  amount: number
  check?: Boolean
  msCalc?: number
  isMsReached?: Boolean
  isZero?: Boolean
  isFirst?: Boolean
}

export const Milestone: React.FC<T> = ({
  sv,
  en,
  title,
  amount,
  image,
  check,
  msCalc,
  isMsReached,
  isZero,
  isFirst,
}) => {
  return (
    <>
      {sv && (
        <>
          {isFirst ? (
            <Container>
              <ImageWrapper className={isMsReached ? 'active' : ''}>
                {check && <MilestoneReached>mål uppnådd!</MilestoneReached>}
                <Image src={image} layout="fill" objectFit="cover" />
                <Text>{title}</Text>
              </ImageWrapper>
              <TextWrapper>
                {isFirst ? (
                  <Amount className={!isMsReached && isZero ? 'complete' : ''}>
                    {amount.toLocaleString()} kr
                  </Amount>
                ) : (
                  <Amount className={isMsReached && isZero ? 'complete' : ''}>
                    {amount.toLocaleString()} kr
                  </Amount>
                )}
                {isMsReached && !isZero && (
                  <Unlock>{msCalc?.toLocaleString()} kr återstående</Unlock>
                )}
              </TextWrapper>
            </Container>
          ) : (
            <Container>
              <ImageWrapper className={isMsReached && !isZero ? 'active' : ''}>
                {check && <MilestoneReached>mål uppnådd!</MilestoneReached>}
                <Image src={image} layout="fill" objectFit="cover" />
                <Text>{title}</Text>
                {!isMsReached && <Background />}
                {!isMsReached && (
                  <Image src="/lock.svg" width={48} height={48} />
                )}
              </ImageWrapper>
              <TextWrapper>
                {isFirst ? (
                  <Amount className={!isMsReached && isZero ? 'complete' : ''}>
                    {amount.toLocaleString()} kr
                  </Amount>
                ) : (
                  <Amount className={isMsReached && isZero ? 'complete' : ''}>
                    {amount.toLocaleString()} kr
                  </Amount>
                )}
                {isMsReached && !isZero && (
                  <Unlock>{msCalc?.toLocaleString()} kr återstående</Unlock>
                )}
              </TextWrapper>
            </Container>
          )}
        </>
      )}
      {en && (
        <>
          {isFirst ? (
            <Container>
              <ImageWrapper className={isMsReached ? 'active' : ''}>
                {check && (
                  <MilestoneReached>Milestone reached!</MilestoneReached>
                )}
                <Image src={image} layout="fill" objectFit="cover" />
                <Text>{title}</Text>
              </ImageWrapper>
              <TextWrapper>
                {isFirst ? (
                  <Amount className={!isMsReached && isZero ? 'complete' : ''}>
                    {amount.toLocaleString()} kr
                  </Amount>
                ) : (
                  <Amount className={isMsReached && isZero ? 'complete' : ''}>
                    {amount.toLocaleString()} kr
                  </Amount>
                )}
                {isMsReached && !isZero && (
                  <Unlock>{msCalc?.toLocaleString()} kr remaining</Unlock>
                )}
              </TextWrapper>
            </Container>
          ) : (
            <Container>
              <ImageWrapper className={isMsReached && !isZero ? 'active' : ''}>
                {check && (
                  <MilestoneReached>Milestone reached!</MilestoneReached>
                )}
                <Image src={image} layout="fill" objectFit="cover" />
                <Text>{title}</Text>
                {!isMsReached && <Background />}
                {!isMsReached && (
                  <Image src="/lock.svg" width={48} height={48} />
                )}
              </ImageWrapper>
              <TextWrapper>
                {isFirst ? (
                  <Amount className={!isMsReached && isZero ? 'complete' : ''}>
                    {amount.toLocaleString()} kr
                  </Amount>
                ) : (
                  <Amount className={isMsReached && isZero ? 'complete' : ''}>
                    {amount.toLocaleString()} kr
                  </Amount>
                )}
                {isMsReached && !isZero && (
                  <Unlock>{msCalc?.toLocaleString()} kr remaining</Unlock>
                )}
              </TextWrapper>
            </Container>
          )}
        </>
      )}
    </>
  )
}
