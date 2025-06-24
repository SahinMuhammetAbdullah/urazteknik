import SEO from '../components/SEO';
import GalleryGrid from '../components/GalleryGrid';
import { allImages } from '../data/galleryData'; // Tüm resim verisini al
import { HashLink } from 'react-router-hash-link';

function GalleryPage() {
  return (
    <>
      <SEO
        title="Galeri | Uraz Teknik | Tamamlanan Kombi ve Klima Çalışmaları"
        description="Uraz Teknik olarak Samsun'da tamamladığımız kombi onarım, klima montajı ve petek temizliği çalışmalarımıza göz atın."
        canonicalUrl="https://www.urazteknik.com/galeri"
      />
      
      {/* Sayfaya Özel Hero Alanı */}
      <section className="page-hero">
          <div className="container">
              <h1>Çalışma Galerimiz</h1>
              <p>Kalite ve güvenle tamamladığımız projelerden bazıları.</p>
          </div>
      </section>

      {/* Genişletilmiş Galeri Alanı */}
      <div className="gallery-full-page" style={{ padding: '80px 0' }}>
          <div className="container">
              <GalleryGrid images={allImages} />
          </div>
      </div>
      
      {/* Harekete Geçirici Mesaj (Call to Action) */}
      <section className="features" style={{ padding: '60px 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
              <h2 style={{ color: 'white', fontSize: '2.2rem' }}>Sizin İçin Ne Yapabiliriz?</h2>
              <p style={{ color: 'white', fontSize: '1.2rem', marginTop: '1rem', marginBottom: '2rem' }}>
                  İhtiyaçlarınıza özel çözümler ve ücretsiz keşif için bizimle iletişime geçin.
              </p>
              <HashLink smooth to="/#iletisim" className="btn btn-primary">
                  <i className="fas fa-envelope"></i> İletişim
              </HashLink>
          </div>
      </section>
    </>
  );
}
export default GalleryPage;
