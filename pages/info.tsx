import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  background: #faf7f2;
  color: ${({ theme }) => theme.color.black};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`
const TextContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;
  padding: 18.8rem;
  max-width: 1280px;
`

const info = () => {
  return (
    <Wrapper>
      <TextContainer>
        <h1>Wedding Information</h1>
        <h2>Wedding Details</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
          delectus. Amet cum reprehenderit animi mollitia excepturi obcaecati
          sunt quisquam fugiat omnis suscipit quibusdam perspiciatis, impedit
          quaerat commodi sint? Beatae, aspernatur.
        </p>
        <h3>Location</h3>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
          delectus. Amet cum reprehenderit animi mollitia excepturi obcaecati
          sunt quisquam fugiat omnis suscipit quibusdam perspiciatis, impedit
          quaerat commodi sint? Beatae, aspernatur.
        </p>
        <h3>Date & Time</h3>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
          delectus. Amet cum reprehenderit animi mollitia excepturi obcaecati
          sunt quisquam fugiat omnis suscipit quibusdam perspiciatis, impedit
          quaerat commodi sint? Beatae, aspernatur.
        </p>
        <h2>Additional Activities</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
          delectus. Amet cum reprehenderit animi mollitia excepturi obcaecati
          sunt quisquam fugiat omnis suscipit quibusdam perspiciatis, impedit
          quaerat commodi sint? Beatae, aspernatur.
        </p>
        <h2>Accomodation</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, de
          sunt quisquam fugiat omnis suscipit quibusdam perspiciatis, impedit
          quaerat commodi sint? Beatae, aspernatur.
        </p>
        <h2>Dress code</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
          delectus. Amet cum reprehenderit animi mollitia excepturi obcaecati
          sunt quisquam fugiat omnis suscipit quibusdam perspiciatis, impedit
          quaerat commodi sint? Beatae, aspernatur.
        </p>
        <h2>Gifts</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
          delectus. Amet cum reprehenderit animi mollitia excepturi obcaecati
          sunt quisquam fugiat omnis suscipit quibusdam perspiciatis, impedit
          quaerat commodi sint? Beatae, aspernatur.
        </p>
        <h2>Kid-free zone</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
          delectus. Amet cum reprehenderit animi mollitia excepturi obcaecati
          sunt quisquam fugiat omnis suscipit quibusdam perspiciatis, impedit
          quaerat commodi sint? Beatae, aspernatur.
        </p>
      </TextContainer>
    </Wrapper>
  )
}

export default info
