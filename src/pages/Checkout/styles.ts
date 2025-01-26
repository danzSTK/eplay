import { styled } from 'styled-components'
import { breakpoints, colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
  marginTop?: string
}

type TabebuttonProps = {
  isActive: boolean
}

export const Row = styled.div<InputGroupProps>`
  display: flex;
  column-gap: 24px;
  align-items: flex-end;
  margin-top: ${(props) => props.marginTop || '0'};

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    width: 100%;
    height: 32px;
    background-color: ${colors.white};
    padding: 0 8px;
    border: 1px solid ${colors.white};
    outline: none;

    &.error {
      border: 1px solid red;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 16px;
  }
`

export const TabButton = styled.button<TabebuttonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  margin-right: 16px;
  padding: 0 8px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  cursor: pointer;

  img {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin-top: 8px;
    width: 100%;
  }
`
/* cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCod: '',
      installments: 1 */
