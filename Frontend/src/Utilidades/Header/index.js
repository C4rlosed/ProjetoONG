import style from 'styled-components'
import Logo from './Logo'
// import ItemOpcao from './ItensHeader'
// import Buttom from '../Botao'
import '../Header/header.css'
import { Link } from 'react-router-dom'

const HeaderContainer = style.div`
    background-color:#ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 20px;

    @media (max-width: 1550px){
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 10px;
        margin: 10px 0;

        @media (max-width: 1300px){
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 20px;
            margin: 10px 0;
        }

        @media (max-width: 850px){
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 15px;
            margin: 10px 0;
        }
    }
`

function Header() {
    return (
        <HeaderContainer>
            <Logo></Logo>
            <nav>
                <ul className='header-menu'>
                    <Link to="/" >HOME</Link>
                    <Link to="/Sobre" >SOBRE NÓS</Link>
                    <Link to="/Noticias" >NOTÍCIAS</Link>
                    <Link to="/Parceiros" >PARCEIROS</Link>
                    <Link to="/Contato" >CONTATO</Link>
                </ul>
            </nav>
            <button type="button"><Link to="/SejaParceiro">Seja Parceiro!</Link></button>
        </HeaderContainer>
    )
}

export default Header;