import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`
const Title = styled.div`
  font-size: ${({ theme }) => theme.type.size.title.lg};
  font-weight: ${({ theme }) => theme.type.weight.bold};
`
const Author = styled.div`
  font-size: ${({ theme }) => theme.type.size.title.md};
  text-transform: capitalize;
`

const ReadingNow = ({ title, author }: { title: string; author: string }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Author>{author}</Author>
    </Container>
  )
}

export default ReadingNow
