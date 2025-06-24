import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Header() {
  return (
    <header>
      <nav className="container">
        <div className="logo">
          <img src="/assets/images/icon.png" alt="icon" style={{ height: '1.6em' }} />
          Uraz Teknik
        </div>
        <ul className="nav-links">
          <li><HashLink smooth to="/#anasayfa">Ana Sayfa</HashLink></li>
          <li><HashLink smooth to="/#hizmetler">Hizmetler</HashLink></li>
          <li><HashLink smooth to="/#iletisim">İletişim</HashLink></li>
          <li><HashLink smooth to="/#yorumlar">Yorumlar</HashLink></li>
          <li><HashLink smooth to="/#galeri">Galeri</HashLink></li>
        </ul>
        <a href="tel:+905432064055" className="emergency-btn">
          <i className="fas fa-phone"></i> 7/24 ACİL SERVİS
        </a>
      </nav>
    </header>
  );
}
export default Header;