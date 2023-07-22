import elo from '../../assets/icons/Elo-logo.jpg';
import mastercard from '../../assets/icons/mastercard.png';
import visa from '../../assets/icons/logo-visa.png';
import pix from '../../assets/icons/pix.png';
import instagram from '../../assets/icons/instagram.png';
import whatsapp from '../../assets/icons/whatsapp.png';
import './Footer.css';

export default function Footer () {
  return (
    <footer id="footer">
      <section className="container-footer">
        <h4>Forma de pagamento</h4>
        <div id="payment">
          <img src={elo} alt="" id='elo' className="icon-payment"/>
          <img src={mastercard} alt="" id='mastercard' className="icon-payment"/>
          <img src={visa} alt="" id='visa' className="icon-payment"/>
          <img src={pix} alt="" id='pix' className="icon-payment"/>
        </div>
      </section>
      <section className="container-footer">
        <h4>Endereço</h4>
        <div id='address'>
          <p>Rod. Assis Chateaubriand, 455 <br /> Pres. Prudente - SP, 19053-680</p>
        </div>
      </section>
      <section className="container-footer">
        <h4>Horário de funcionamento</h4>
        <p>Terça a Domingo e Feriados</p>
        <p>10h - 20h</p>
      </section>
      <section className="container-footer">
        <div>
          <h4>Redes Sociais</h4>
          <div className='social'>
            <a href="https://www.instagram.com/pesqueirozoiodagua_official/" target="_blank" rel="noreferrer">
              <img src={instagram} alt="icone do instagram" id="instagram" className="social-icon"/>
            </a>
            <a href="https://wa.me/+5518997191001" target="_blank" rel="noreferrer">
              <img src={whatsapp} alt="icone do whatsapp" className="social-icon" />
            </a>
          </div>
        </div>
      </section>
      <section id="cpy-container">
        <p>Copyright © 2023 - Todos Direitos Reservados - Pesqueiro Zoio D&apos;água </p>
        <p>Desenvolvido por Cauê Peruque</p>
      </section>
    </footer>
  )
}