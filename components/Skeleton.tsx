import React from 'react'
import styled from 'styled-components'
import { IndexMain } from '../styles'
import { useRouter } from 'next/router'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: min-content;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 8.8rem;
  margin-bottom: 6.4rem;
  max-width: 986px;
  cursor: progress;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    width: 100vw;
    padding-bottom: 2.4rem;
  }
`
const Title = styled.div`
  height: 4.8rem;
  margin-bottom: 0.8rem;
  width: 40%;
  background: ${({ theme }) => theme.color.disabled};
  border-radius: 4px;
  margin-bottom: 2.4rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
  }
`
const Text = styled.div`
  background: linear-gradient(0.25turn, transparent, #cecece, transparent),
    linear-gradient(#d9d9d9, #d9d9d9), linear-gradient(#d9d9d9, #d9d9d9);
  background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
  animation: loading 1s alternate infinite;
  animation: fade 3s alternate infinite;
  @keyframes fade {
    to {
      opacity: 0.8;
    }
  }
  @keyframes loading {
    to {
      background-position: 0, 100%;
      opacity: 0;
    }
  }
  &.sm {
    height: 4.8rem;
    margin-bottom: 0.8rem;
    width: 30%;
    border-radius: 4px;
  }
  &.md {
    height: 4.8rem;
    margin-bottom: 0.8rem;
    width: 50%;
    border-radius: 4px;
  }
  &.lg {
    height: 4.8rem;
    margin-bottom: 0.8rem;
    width: 90%;
    border-radius: 4px;
  }
`
const Skeleton = () => {
  const router = useRouter()

  return (
    <>
      <IndexMain className={router.asPath.replace(/\//g, '')}>
        <Container>
          <Title />
          <Text className="lg" />
          <Text className="md" />
          <Text className="sm" />
        </Container>
      </IndexMain>
    </>
  )
}

export default Skeleton
