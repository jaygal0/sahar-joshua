import styled from 'styled-components'

export const IndexContainer = styled.div``
export const Main = styled.div`
  background: ${({ theme }) => theme.color.white};
  padding: 6.4rem 18.8rem;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desklg}) {
    padding: 2.4rem 18.8rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    padding: 2.4rem 5.6rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    padding: 2.4rem 5.6rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    padding: 6.4rem 1.6rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonelg}) {
    padding: 7.2rem 1.6rem;
  }
`
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
export const FlexWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phonemd}) {
    flex-direction: column;
  }
`
export const GenericLabel = styled.label`
  font-size: 3.2rem;
  line-height: ${({ theme }) => theme.type.height.lg};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.deskmd}) {
    font-size: 2.4rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.desksm}) {
    font-size: 1.6rem;
  }
`

export const Spacer = styled.div`
  &.lg {
    height: 5.6rem;
  }
  &.md {
    height: 3.2rem;
  }
  &.sm {
    height: 1.6rem;
  }
`
