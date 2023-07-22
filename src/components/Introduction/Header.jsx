import logo from '../../assets/images/logo.png';
import './Header.css';

export default function Header () {
  return (
    <header id="header">
      <article>
        <img src={ logo } id="header__logo"/>
      </article>
      <article>
        <h1 className="header__title">
          Cardápio
        </h1>
      </article>
    </header>
  )
}