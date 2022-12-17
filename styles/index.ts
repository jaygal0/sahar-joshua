import styled from 'styled-components'

export const IndexMain = styled.main`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  align-items: center;
  background: #faf7f2;
  color: ${({ theme }) => theme.color.black};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    padding-top: 20vh;
  }
`
