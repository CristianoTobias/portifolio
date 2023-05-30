import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { Descricao, BotaoTema, SidebarContainer } from './style'

const Sidebar = () => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Cristiano Tobias</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          cristianotobias
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Bacharelado Engenharia de Software
        </Descricao>
        <BotaoTema>Trocar Tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
