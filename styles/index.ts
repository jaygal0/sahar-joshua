import styled from 'styled-components'

export const IndexMain = styled.main`
  min-height: 100vh;
  height: 100vh;
  min-width: 100vw;
  background: #faf7f2;
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    height: 100%;
    padding-top: 2.4rem;
  }
`
export const IndexWrapper = styled.div`
  position: relative;
  max-width: 1504px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    display: flex;
    flex-direction: column;
    padding: 0 1.6rem;
    gap: 6.4rem;
    height: 100%;
  }
`
