import styled from 'styled-components'

export const IndexMain = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  align-items: center;
  position: absolute;
  padding-top: 35vh;
  padding-bottom: 13.6rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    padding-top: 20vh;
  }

  &.home {
    background: ${({ theme }) => theme.color.home.background};
    padding-top: 20vh;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    overflow: none;
    height: 100vh;
  }
  &.projects {
    background: ${({ theme }) => theme.color.projects.background};
  }
  &.timeline {
    background: ${({ theme }) => theme.color.timeline.background};
  }
  &.blog {
    background: ${({ theme }) => theme.color.blog.background};
  }
  &.now {
    background: ${({ theme }) => theme.color.now.background};
  }
  &.unoffice-hours {
    background: ${({ theme }) => theme.color.unofficeHours.background};
  }
`
export const ExternalLink = styled.a`
  text-decoration: underline;
  letter-spacing: 0.5px;

  &.no-underline {
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }
`
export const BodyText = styled.p`
  font-size: ${({ theme }) => theme.type.size.body.md};
  color: ${({ theme }) => theme.color.text};
  line-height: ${({ theme }) => theme.type.height.lg};
`
export const TechStack = styled.p`
  font-size: ${({ theme }) => theme.type.size.body.lg};
  color: ${({ theme }) => theme.color.text};
`
export const ImageContainer = styled.div`
  width: 100%;
`
export const IndexFlexRowContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phoneLarge}) {
    flex-direction: column;
  }
`
