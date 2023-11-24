import style from 'styled-components'
import Header from '../Utilidades/Header'
import Footer from '../Utilidades/Footer'
import '../Noticias/noticia.css'
import noticia1img from '../Utilidades/Imagem//noticias/noticia1.png'
import noticia2img from '../Utilidades/Imagem//noticias/noticia2.png'
import noticia3img from '../Utilidades/Imagem//noticias/noticia3.png'
import noticiactd from '../Utilidades/Imagem//noticias/noticia_ctd.png'
import Carrossel from './carrossel'

const NoticiaContainer = style.div``


function Noticia() {
    return (
        <NoticiaContainer>
            <Header></Header>
            <div className='noticias-bg'>
                <div className='noticias-banner'>
                    <h1>HISTÓRIAS QUE MARCAM</h1>
                    <p>VEJA AS NOSSAS NOTÍCIAS</p>
                </div>
            </div>
            <h2 className='titulo-pg'>VEJA MAIS</h2>

            <div className='card-container'>
                <div className='card'>
                    {data.map((d) => (
                        <div className='card-conteudo'>
                            <div className='card-img'>
                                <img src={d.image} alt="" />
                            </div>
                            <div className='card-text'>
                                <h2>{d.title}</h2>
                                <p>{d.info}</p>
                                <p>{d.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <article className='noticia-conteudo'>
                <div>
                    <img src={noticiactd} alt='' />
                    <div className='noticia-text'>
                        <h2>Juntos por um só objetivo, <br/>venha fazer parte de nossa família!</h2>
                    </div>
                </div>
            </article>

            <div className='div-carrossel'>
                <Carrossel></Carrossel>
            </div>
            <Footer></Footer>
        </NoticiaContainer>
    )
};

const data = [
    {
        title: `Rexona quebrando barreiras`,
        info: `O Projeto se concentra no apoio a crianças e adolescentes para serem mais ativos.`,
        date: `21/08/2021`,
        image: noticia1img
    },
    {
        title: `Visita Musical`,
        info: `Nosso querido amigo e rapper Will veio conhecer o instituto.`,
        date: `12/05/2021`,
        image: noticia2img
    },
    {
        title: `Dia das crianças memorável`,
        info: `A Hillsong e colaboradores, proporcionaram um dia mais que especial às crianças da comunidade.`,
        date: `08/11/2022`,
        image: noticia3img
    },
]

export default Noticia;