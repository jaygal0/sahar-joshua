import styled from 'styled-components'

export const IndexMain = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  align-items: center;
  position: absolute;
  padding-top: 35vh;

  &.home {
    background: ${({ theme }) => theme.color.home.background};
    padding-top: 20vh;
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
`
