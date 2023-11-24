import style from 'styled-components'
import '../Footer/footer.css'
import footerImg from '../Imagem/fundoParceiros.svg'
import logoFooter from '../Imagem/logo-banner.png'
import instagram from '../Imagem/redes_sociais/instagram.svg'
import facebook from '../Imagem/redes_sociais/facebook.svg'
import whatsapp from '../Imagem/redes_sociais/whatsapp.svg'
import { Link } from 'react-router-dom'

const FooterContainer = style.div`
    max-width: 100%;
    max-height: 100%;
`


function Footer() {
    return (
        <FooterContainer>
            <div className='footer-bg'>
                <h2><span id='font-300'>SEJA</span> PARCEIRO <span id='font-300'>E</span> FAÇA PARTE DESTA HISTÓRIA!</h2>
                <p>Venha fazer parte desta causa que ajuda diversas crianças e 
                    adolescentes da comunidade com os estudos, incentivando a 
                    prática de esportes e no ingresso no mercado de trabalho</p>
                <button type='button'><Link to="/Parceiros">Saiba Mais</Link></button>
            </div>
            <div className='footer'>
                <img id='logoFooter' src={logoFooter} alt='Logo Instituto Jardim Peri' />
                <h2><span id='font'>INSTITUTO</span><br /> JARDIM PERI</h2>
                <ul className="links-social">
                    <li>
                        <a href="https://www.instagram.com/institutojardimperi/" target="_blank">
                            <img src={instagram} alt="Instagram" className="img-icons" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/institutoperi/" target="_blank">
                            <img src={facebook} alt="Facebook" className="img-icons" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/search?q=instituto+jardim+peri&oq=ins&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARBFGDkyBggCEEUYOzIGCAMQRRg8MgYIBBBFGDwyBggFEEUYQTIGCAYQRRhBMgYIBxBFGDzSAQgzNjUxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#" target="_blank">
                            <img src={whatsapp} alt="Whatsapp" className="img-icons" />
                        </a>
                    </li>
                </ul>
                <p>R. Condessa Amália Matarazzo, 136 - Jardim Peri, São Paulo - SP, 02652-000</p>
            </div>
        </FooterContainer>
    )
};

export default Footer; 