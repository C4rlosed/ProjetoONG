import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import noticiactd from '../Utilidades/Imagem//noticias/carrossel/noticia1.jpg'
import noticiactd1 from '../Utilidades/Imagem//noticias/carrossel/noticia2.jpg'
import noticiactd2 from '../Utilidades/Imagem//noticias/carrossel/noticia3.jpg'
import noticiactd3 from '../Utilidades/Imagem//noticias/carrossel/noticia4.jpg'
import noticiactd4 from '../Utilidades/Imagem//noticias/carrossel/noticia5.jpg'
import '../Noticias/noticia.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import styled from 'styled-components';

const data = [
    {
        id: '1',
        title: `Celebração Solidária no Jardim Peri Encanta a Garotada no Dia das Crianças `,
        info: `No último sábado, promovemos uma festa encantadora para celebrar o Dia das Crianças. Com atividades lúdicas, distribuição de lanches e brinquedos, a iniciativa proporcionou momentos de alegria e solidariedade, unindo a comunidade em torno do bem-estar das crianças.`,
        date: `21/08/2021`,
        image: noticiactd
    },
    {
        id: '2',
        title: `Inovação na Comunidade: Lançamento do Curso de Informática Desperta Entusiasmo e Oportunidades`,
        info: `Em um marco para o Jardim Peri, foi lançado um novo curso de informática, proporcionando aos moradores acesso a habilidades essenciais. A comunidade celebrou entusiasticamente a iniciativa, reconhecendo o potencial transformador do conhecimento tecnológico para o desenvolvimento local. O curso promete abrir portas para oportunidades educacionais e profissionais, fortalecendo o empoderamento digital na região.`,
        date: `12/05/2021`,
        image: noticiactd1
    },
    {
        id: '3',
        title: `Energia e Paixão Pelo Esporte: Treinamento de Futsal Cativa Jovens Talentos no Jardim Peri`,
        info: `Em um dia animado, a garotada do Jardim Peri participou de um treinamento de futsal emocionante, promovendo a união e o desenvolvimento esportivo. Com instrutores dedicados, o evento proporcionou não apenas técnicas aprimoradas, mas também momentos de diversão e camaradagem, consolidando o futsal como uma paixão crescente na comunidade.`,
        date: `08/11/2022`,
        image: noticiactd2
    },
    {
        id: '4',
        title: `Solidariedade em Ação: Entrega de Cestas Básicas Beneficia Famílias no Jardim Peri`,
        info: `Em um gesto de compaixão, a comunidade do Jardim Peri testemunhou a entrega emocionante de cestas básicas, proporcionando apoio vital a famílias em necessidade. Com a colaboração de voluntários locais, a iniciativa reforçou os laços comunitários, trazendo alívio e esperança para aqueles que enfrentam desafios. A entrega das cestas básicas destaca o poder transformador da solidariedade em tempos difíceis.`,
        date: `21/08/2021`,
        image: noticiactd3
    },
    {
        id: '5',
        title: `Festa Esportiva no Jardim Peri: Sucesso do Campeonato de Futsal Infanto-juvenil`,
        info: `Em um clima de pura animação, o Jardim Peri foi palco de um empolgante campeonato de futsal para crianças. Com equipes determinadas e torcidas vibrantes, o evento destacou o espírito esportivo e a habilidade crescente dos jovens talentos locais. A competição não apenas promoveu a atividade física, mas também fortaleceu os laços comunitários, proporcionando uma experiência esportiva memorável para toda a comunidade.`,
        date: `12/05/2021`,
        image: noticiactd4
    },
]

const CarrosselContainer = styled.div`
    width: 1050px;
    max-width: 100%;
    margin: 0 auto;
`

function Carrossel() {
    return (
        <CarrosselContainer>
            <div className='carrossel-noticias'>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                {data.map((d) => (
                    <SwiperSlide key={d.id}>
                        <img src={d.image} alt='Slider' className='slide-item' />
                        <div className='slider-text'>
                            <h2>{d.title}</h2>
                            <p>{d.info}</p>
                            <p>{d.date}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </CarrosselContainer>
    )
};


export default Carrossel;
