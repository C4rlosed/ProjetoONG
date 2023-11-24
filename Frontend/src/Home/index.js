import style from 'styled-components'
import '../Home/home.css'
import logoBanner from '../Utilidades/Imagem/logo-banner.png'
import sobreimg from '../Utilidades/Imagem/sobre_home.png'
import doacaoimg from '../Utilidades/Imagem/doacao_home.png'
import noticia1img from '../Utilidades/Imagem/noticia1.png'
import noticia2img from '../Utilidades/Imagem/noticia2.png'
import noticia3img from '../Utilidades/Imagem/noticia3.png'
import Footer from '../Utilidades/Footer';
import Header from '../Utilidades/Header';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <Header></Header>
            <div className='home-bg'>
                <div className='home-banner'>
                    <img id='LogoBanner' src={logoBanner} alt='Logo Instituto Jardim Peri' />
                    <h1><span id='font-300'>INSTITUTO</span><br /> JARDIM PERI</h1>
                    <p>NOSSA MISSÃO É SERVIR</p>
                </div>
            </div>
            <section className='sobre-bg-home'>
                <img className='sobre-img-home' src={sobreimg} alt='' />
                <div>
                    <h2><span id='font-300'>CONHEÇA O </span> INSTITUTO</h2>
                    <p>O Instituto Jardim Peri é um farol de esperança no coração do bairro. 
                        Comprometidos com o desenvolvimento comunitário, oferecemos programas educacionais, 
                        eventos solidários e oportunidades que empoderam nossos vizinhos a 
                        alcançarem todo o seu potencial.</p>
                    <button type='button' className='button-home'><Link to="/Sobre">Saiba Mais</Link></button>
                </div>
            </section>
            <section className='doacao-bg-home'>
                <div>
                    <h2><span id='font-300'>SEJA UM</span> APOIADOR!</h2>
                    <p>Junte-se a nós como parceiro no compromisso fortalecer nossa comunidade. 
                        Ao colaborar com o Instituto Jardim Peri, você faz parte de iniciativas 
                        transformadoras, impulsionando o progresso e promovendo mudanças positivas. 
                        Sua parceria é essencial para construirmos juntos um futuro mais inclusivo e próspero.</p>
                    <button type='button' className='button-home'><Link to="/Contato">Doe já!</Link></button>
                </div>
                <img className='doacao-img-home' src={doacaoimg} alt='' />
            </section>
            <article className='noticias-bg-home'>
                <div className='bannerNews'></div>
                <div className='noticias-conteudo-home'>
                    <div className='noticias-home'>
                        <a>
                            <img className='img-home-noticias' src={noticia1img} alt=''></img>
                            <div className='noticias-home-txt'>
                                <h3>Rexona quebrando barreiras</h3>
                                <p>O Projeto se concentra no apoio a crianças e adolescentes para serem mais ativos.</p>
                            </div>
                        </a>
                        <a>
                            <img className='img-home-noticias'  src={noticia2img} alt=''></img>
                            <div className='noticias-home-txt'>
                                <h3>Visita Musical</h3>
                                <p>Nosso querido amigo e rapper Will veio conhecer o instituto.</p>
                            </div>
                        </a>
                        <a>
                            <img className='img-home-noticias'  src={noticia3img} alt=''></img>
                            <div className='noticias-home-txt'>
                                <h3>Dia das crianças memorável</h3>
                                <p>A Hillsong e colaboradores, proporcionaram um dia mais que especial às crianças da comunidade.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </article>
            <Footer></Footer>
        </>
    )
};

export default Home;