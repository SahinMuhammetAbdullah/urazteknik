import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Scroll işlemini gerçekleştiren fonksiyon
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-title">Uraz Teknik</h3>
            <p>Mert Bayram liderliğinde, Samsun geneli profesyonel kombi ve klima çözümleri. Güvenilir hizmet, uzman kadro ve garantili işçilik.</p>
          </div>
          <div className="footer-col">
            <h3 className="footer-title">Site Haritası</h3>
            <ul className="footer-links">
              {/* HashLink'ler zaten sayfa içi kaydırma yapar, onlara dokunmuyoruz */}
              <li><HashLink smooth to="/#anasayfa">Ana Sayfa</HashLink></li>
              <li><HashLink smooth to="/#hizmetler">Hizmetlerimiz</HashLink></li>
              <li><HashLink smooth to="/#yorumlar">Müşteri Yorumları</HashLink></li>
              
              {/* Yeni sayfaya giden Link'lere onClick ile kaydırma eklendi */}
              <li><Link to="/iletisim" onClick={scrollToTop}>İletişim</Link></li>
              <li><Link to="/galeri" onClick={scrollToTop}>Galeri</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3 className="footer-title">Hizmet Bölgelerimiz</h3>
            <ul className="footer-links">
              {/* Yeni sayfaya giden Link'lere onClick ile kaydırma eklendi */}
              <li><Link to="/hizmet/atakum-kombi-klima-servisi" onClick={scrollToTop}>Atakum Kombi ve Klima Servisi</Link></li>
              <li><Link to="/hizmet/ilkadim-kombi-klima-servisi" onClick={scrollToTop}>İlkadım Kombi ve Klima Servisi</Link></li>
              <li><Link to="/hizmet/canik-kombi-klima-servisi" onClick={scrollToTop}>Canik Kombi ve Klima Servisi</Link></li>
              <li><Link to="/hizmet/tekkekoy-kombi-klima-servisi" onClick={scrollToTop}>Tekkeköy Kombi ve Klima Servisi</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Uraz Teknik Isınma ve Soğutma Servisi. Tüm hakları saklıdır. | 7/24 Hizmet Hattı: 0543 206 40 55</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;