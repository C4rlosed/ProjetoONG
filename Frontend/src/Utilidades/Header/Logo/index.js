import styled from 'styled-components'
import logo from '../../Imagem/logo.png'

const LogoContainer = styled.div`
    display: flex;
    font-size: 10px;
    margin-left: 20px;

    @media (max-width:1050px) {
        display: flex;
        font-size: 10px;
        margin-left: 10px;

        @media (max-width:850px) {
            display: flex;
            font-size: 10px;
            margin: 0 auto;
            gap: 10px;
        }
    }
`
const LogoImage = styled.img`
    padding: 5px 10px 0 30px;
    height: 70px;
    width: 70px;

    @media (max-width:850px) {
        padding: 10px 0 0 0;
        height: 60px;
        width: 60px;
    }
`
const Span = styled.span`
    font-size: 26px;
    font-weight: 300;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt="Descrição da Imagem"/>
            <h1><Span>INSTITUTO</Span><br></br>JARDIM PERI</h1>
        </LogoContainer>
    )
}

export default Logo;