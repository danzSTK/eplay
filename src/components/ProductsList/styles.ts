import styled from 'styled-components'

import { Props } from '.'
import { breakpoints, colors } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<
  Omit<Props, 'title' | 'games' | 'isLoading'>
>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.gray : colors.black};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 40px;
  gap: 24px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
