import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import imgparceiros from '../Utilidades/Imagem//parceiros/carrossel/1.jpg'
import imgparceiros1 from '../Utilidades/Imagem//parceiros/carrossel/2.jpg'
import imgparceiros2 from '../Utilidades/Imagem//parceiros/carrossel/3.jpg'
import imgparceiros3 from '../Utilidades/Imagem//parceiros/carrossel/4.jpg'
import imgparceiros4 from '../Utilidades/Imagem//parceiros/carrossel/5.jpg'
import '../Parceiros/parceiros.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import styled from 'styled-components';

const data = [
    {
        id: '1',
        image: imgparceiros
    },
    {
        id: '2',
        image: imgparceiros1
    },
    {
        id: '3',
        image: imgparceiros2
    },
    {
        id: '4',
        image: imgparceiros3   
    },
    {
        id: '5',
        image: imgparceiros4
    },
]

const CarrosselContainer = styled.div`
    margin: 0 5% 0 5%;
`

function CarrosselParceiro() {
    return (
        <CarrosselContainer>
            <div className='carrossel-parceiros'>
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </CarrosselContainer>
    )
};


export default CarrosselParceiro;
