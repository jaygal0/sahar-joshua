import styled from 'styled-components'

export const IndexMain = styled.main`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  align-items: center;
  background: #faf7f2;
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    align-items: flex-start;
    padding-top: 4.8rem;
  }
`
export const IndexWrapper = styled.div`
  display: flex;
  max-width: 1504px;
  padding: 0 12rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 6.4rem;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    flex-direction: column;
    padding: 6.4rem;
    gap: 6.4rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    flex-direction: column;
    padding: 0 1.6rem;
    gap: 6.4rem;
  }
`
