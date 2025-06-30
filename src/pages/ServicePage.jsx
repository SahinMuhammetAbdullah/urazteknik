import { useParams, Navigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import SEO from '../components/SEO';

// Yeni oluşturduğumuz CSS dosyasını import ediyoruz
import './ServicePage.css';

// Hero alanı için kullanılacak sabit bir arka plan resmi
const heroBgImage = "url('https://images.unsplash.com/photo-1605328292813-356a4b13a37b?q=80&w=2070&auto=format&fit=crop')";

function ServicePage() {
  const { slug } = useParams();
  const data = servicesData[slug];

  if (!data) {
    return <Navigate to="/" />; // Sayfa bulunamazsa ana sayfaya yönlendir
  }

  // Dinamik olarak arka plan stili oluştur
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.7)), ${heroBgImage}`
  };

  return (
    <>
      <SEO
        title={data.title}
        description={data.description}
        canonicalUrl={`https://www.urazteknik.com.tr/hizmet/${slug}`}
      />
      
      {/* Sayfaya Özel Hero Alanı */}
      {/* Stili doğrudan JSX içinde veriyoruz */}
      <section className="page-hero" style={heroStyle}>
        <div className="container">
          <h1>{data.heroTitle}</h1>
          <p>Mert Bayram'ın 10 Yıllık Tecrübesiyle Garantili Çözümler</p>
        </div>
      </section>
      
      {/* Sayfa içeriği */}
      <main className="content-section">
        <div className="container">
          <div className="content-grid">
            <article>
              <h2>{data.mainTitle}</h2>
              {data.mainParagraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
              ))}
              <h3>{data.serviceListTitle}</h3>
              <ul className="service-list">
                {data.serviceList.map((item, i) => (
                  <li key={i}><i className="fas fa-check-circle"></i>{item}</li>
                ))}
              </ul>
            </article>
            <aside className="contact-card-sidebar">
              <i className="fas fa-phone-volume" style={{ fontSize: '3rem', color: '#3498db', marginBottom: '1rem' }}></i>
              <h3>Acil Servis mi Lazım?</h3>
              <p>{data.sidebarText}</p>
              <a href="tel:+905432064055" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                <i className="fas fa-phone"></i> Hemen Ara
              </a>
              <a href="https://wa.me/905432064055" className="btn btn-secondary" style={{ marginTop: '0.5rem', width: '100%', color: '#333', borderColor: '#333' }}>
                <i className="fab fa-whatsapp"></i> WhatsApp'tan Yaz
              </a>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
export default ServicePage;