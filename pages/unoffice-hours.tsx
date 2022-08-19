import React from 'react'
import styled from 'styled-components'
import { Navigation } from '../components/Navigation'
import { IndexMain } from '../styles'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: min-content;
  align-items: center;
  justify-content: center;
  padding-bottom: 10.4rem;
`
const Title = styled.h1`
  width: 90%;
  font-size: ${({ theme }) => theme.type.size.title.lg};
  font-family: 'DM Sans', sans-serif;
  line-height: ${({ theme }) => theme.type.height.md};
  margin-bottom: 0.8rem;
  text-transform: capitalize;
  letter-spacing: 0.5px;
`
const Text = styled.p`
  width: 90%;
  font-size: ${({ theme }) => theme.type.size.title.sm};
  line-height: ${({ theme }) => theme.type.height.lg};
  margin-bottom: 3.2rem;
  font-weight: ${({ theme }) => theme.type.weight.normal};
`
const ListWrapper = styled.ul`
  width: 85%;
  margin-bottom: 2.4rem;
`
const List = styled.li`
  font-size: ${({ theme }) => theme.type.size.title.sm};
  margin-left: 2.4rem;
  line-height: ${({ theme }) => theme.type.height.lg};
`

const unofficeHours = () => {
  return (
    <>
      <Navigation />
      <IndexMain className="unoffice-hours">
        <Container>
          <Title>Unoffice Hours</Title>
          <Text>
            Every Wednesday afternoon, I’m opening up my calendar so anyone can
            book a 30 minute call.
          </Text>
          <Text>
            Unoffice Hours are informal chats where we could chat about anything
            you fancy.
          </Text>
          <Text>Some possible topics include:</Text>
          <ListWrapper>
            <List>list</List>
            <List>list</List>
            <List>list</List>
            <List>list</List>
            <List>list</List>
          </ListWrapper>
          <Text>Inspired by Dave Smyth.</Text>
        </Container>
      </IndexMain>
    </>
  )
}

export default unofficeHours
