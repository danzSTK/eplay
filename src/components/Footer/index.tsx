import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              to="/categories#rpg"
              title="Clique aqui para acessar jogos de RPG"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              to="/categories#action"
              title="Clique aqui para acessar jogos de Ação"
            >
              Ação
            </S.Link>
          </li>
          <li>
            <S.Link
              to="/categories#simulation"
              title="Clique aqui para acessar jogos de Simulação"
            >
              Simulação
            </S.Link>
          </li>
          <li>
            <S.Link
              to="/categories#sports"
              title="Clique aqui para acessar jogos de Esportes"
            >
              Esportes
            </S.Link>
          </li>
          <li>
            <S.Link
              to="/categories#fight"
              title="Clique aqui para acessar jogos de Luta"
            >
              Luta
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rápido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
            >
              Promoções
            </S.Link>
          </li>
          <li>
            <S.Link
              to="/#comig-soon"
              title="Clique aqui para acessar a seção Em breve"
            >
              Em Breve
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{currentYear} - &copy; Daniel Félix Todos os direitos reservados</p>
    </div>
  </S.Container>
)

export default Footer

// rpg acao aventura simulacao estrategia fps - novidades promocoes em breve
