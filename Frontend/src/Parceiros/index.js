import style from 'styled-components'
import Header from '../Utilidades/Header';
import '../Parceiros/parceiros.css';
import parceiroImg from '../Utilidades/Imagem/parceiros/parcImg.png'
import movimentoconexao from '../Utilidades/Imagem/parceiros/movimentoconexao.png'
import quebrandobarreiras from '../Utilidades/Imagem/parceiros/quebrandobarreiras.png'
import lovefutbol from '../Utilidades/Imagem/parceiros/lovefutbol.png'
import freefirelogo from '../Utilidades/Imagem/parceiros/freefirelogo.png'
import Footer from '../Utilidades/Footer';
import CarrosselParceiro from '../Parceiros/carrossel';
import { Link } from 'react-router-dom'

const ParceiroContainer = style.div`
`


function Parceiro() {
    return (
        <ParceiroContainer>
            <Header></Header>
            <div className='parceiro-bg'>
                <div className="parceiro-banner">
                    <h1>CONSTRUINDO O FUTUTO JUNTOS</h1>
                    <p><span id='font-300'>CONHEÇA NOSSOS PARCEIROS</span></p>
                </div>
            </div>
            <h2 className='titulo-parceiros'><span id='font-300'>NOSSOS </span>PARCEIROS</h2>
            <div id='sub-titulo'></div>
            <div className="logos-parceiros">
                <div className="logo-parceiros-img">
                    <img className='logos' src={movimentoconexao} alt="movimento conexão favela" />
                    <img className='logos' src={quebrandobarreiras} alt="quebrando barreiras rexona" />
                    <img className='logos' src={lovefutbol} alt="lovefutbol" />
                    <img className='logos' src={freefirelogo} alt="free fire" />
                </div>
            </div>
            <CarrosselParceiro></CarrosselParceiro>
            <section className="parceiro-conteudo">
                <img src={parceiroImg} alt="" />
                <div className='parceiro-text'>
                    <h2><span id='font-300'>UM POUCO DO QUE JÁ </span> CONSTRUIMOS JUNTOS <span id='font-300'>POR AQUI</span></h2>
                    <div id='sub-titulo-2'></div>
                    <p>
                    Em uma nova parceria com a ONG Love. Futebol e, dessa vez, através do trabalho do Instituto Jardim Peri, 
                    o Projeto Rexona Quebrando Barreiras chega à comunidade onde Gabriel Jesus nasceu com o objetivo de apoiar 
                    crianças e adolescentes, fomentando ainda mais o sonho dos pequenos atletas.
                    </p>
                    <button type="button" className="button-parceiro"><Link to="/Noticias">Saiba Mais</Link></button>
                </div>
            </section>
            
            <Footer></Footer>
        </ParceiroContainer>
    )
};

export default Parceiro;