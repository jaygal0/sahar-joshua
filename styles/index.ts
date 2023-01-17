import styled from 'styled-components'

export const IndexMain = styled.main`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  background: #faf7f2;
  padding: 1.6em;
  color: ${({ theme }) => theme.color.black};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &.column {
    flex-direction: column;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    height: 100%;
    padding-top: 2.4rem;

    &.scrollLock {
      overflow: auto;
      overflow-x: hidden;
    }
  }
`
export const IndexWrapper = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  max-width: 2440px;
  width: 100%;
  height: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    padding: 0 3.2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    display: flex;
    flex-direction: column;
    padding: 0 1.6rem;
    gap: 3.2rem;
    height: 100%;
  }
`
