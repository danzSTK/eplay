import { PacmanLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => {
  return (
    <Container>
      <PacmanLoader size={25} color={colors.white} />
    </Container>
  )
}

export default Loader
