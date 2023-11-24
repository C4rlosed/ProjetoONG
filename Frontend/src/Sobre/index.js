import style from 'styled-components'
import Header from '../Utilidades/Header';
import Footer from '../Utilidades/Footer';
import '../Sobre/sobre.css'
import sobreimg1 from '../Utilidades/Imagem/sobre_nos/quem-somos1.png'
import sobreimg2 from '../Utilidades/Imagem/sobre_nos/quem-somos2.png'


const SobreContainer = style.div``


function Sobre() {
    return (
        <SobreContainer>
            <Header></Header>
            <div className='sobre-bg'>
                <div className='sobre-banner'>
                    <h1><span id='font-300'>SOBRE O </span>INSTITUTO</h1>
                    <p>CONHEÇA A NOSSA HISTÓRIA</p>
                </div>
            </div>
            <h2 className='titulo-pg'>QUEM SOMOS</h2>
            <section className='sobre-conteudo-1'>
                <div>
                    <p>Fundado em 2020 por Renato Alves Duarte, o Instituto Jardim Peri nasceu da visão de 
                        transformar desafios em oportunidades na comunidade. Inspirado por um profundo 
                        desejo de impactar positivamente as vidas no Jardim Peri, Renato estabeleceu o 
                        Instituto como um farol de esperança e empoderamento. Desde então, o 
                        Instituto Jardim Peri tem sido um agente de mudança, proporcionando programas educacionais, 
                        eventos culturais e ações solidárias que fortalecem os laços comunitários.</p>
                </div>
                <img className='img-sobre' src={sobreimg1} alt='' />
            </section>
            <section className='sobre-conteudo-2'>
                <img className='img-sobre' src={sobreimg2} alt='' />
                <div>
                    <p>Nosso compromisso é capacitar cada indivíduo a alcançar seu potencial máximo, 
                        criando um ambiente onde a educação e o apoio social são acessíveis a todos. 
                        Ao fazer parte do Instituto Jardim Peri, você se junta a uma comunidade dedicada 
                        a construir um Jardim Peri mais forte, resiliente e unido. Juntos, estamos 
                        construindo futuros e inspirando a transformação que acreditamos ser possível 
                        quando nos unimos em prol do bem comum.</p>
                </div>
            </section>
            <Footer></Footer>
        </SobreContainer>
    )
};

export default Sobre;