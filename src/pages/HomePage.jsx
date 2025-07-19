import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import GalleryGrid from '../components/GalleryGrid';
import ReviewCard from '../components/ReviewCard';
import ServiceCard from '../components/ServiceCard';
import { mainPageImages } from '../data/galleryData';
import { mainPageReviews } from '../data/reviewsData'; // Bu yanlış

function HomePage() {
  const googleReviewLink = "https://www.google.com/maps/place/Samsun+Klima+%26+Kombi+Bak%C4%B1m+%7C+Uraz+Teknik+Is%C4%B1tma+ve+So%C4%9Futma+Sistemleri/@41.3109548,36.2880145,14z/data=!4m8!3m7!1s0x4088799777027a85:0x2a703c045375f56!8m2!3d41.314893!4d36.2941137!9m1!1b1!16s%2Fg%2F11xh1zhjwr?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D";

  // --- İletişim Formu için State ve Fonksiyonlar ---
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    service: 'Kombi Bakım', 
    message: '' 
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Lütfen Ad Soyad ve Telefon alanlarını doldurun.');
      return;
    }

    let whatsappMessage = `Merhaba! Servis talebim var:\n\n` +
                          `Ad: ${formData.name}\n` +
                          `Tel: ${formData.phone}\n` +
                          `Hizmet: ${formData.service}\n` +
                          (formData.message ? `Not: ${formData.message}\n` : '') +
                          `\nLütfen beni arayabilir misiniz?`;

    const whatsappURL = `https://wa.me/905432064055?text=${encodeURIComponent(whatsappMessage)}`;
    
    if (confirm('WhatsApp\'a yönlendirileceksiniz. Devam etmek istiyor musunuz?')) {
        window.open(whatsappURL, '_blank');
        setFormData({ name: '', phone: '', service: 'Kombi Bakım', message: '' });
    }
  };
  // --- Form Mantığı Bitişi ---

  return (
    <>
      <SEO 
        title="Samsun Klima & Kombi Bakım | Uraz Teknik Isıtma ve Soğutma Sistemleri"
        description="Samsun geneli profesyonel kombi ve klima teknik servisi Uraz Teknik, 7/24 acil arıza, bakım, onarım ve montaj hizmeti sunar. Garantili ve uygun fiyatlı çözümler için hemen arayın!"
        canonicalUrl="https://www.urazteknik.com/"
      />

      {/* Hero Section */}
      <section className="hero" id="anasayfa">
          <div className="container">
              <div className="hero-content">
                  <h1>Kombi & Klima Uzmanı</h1>
                  <p>7/24 Bakım, Onarım ve Montaj Hizmetleri | Samsun Geneli Hızlı Servis</p>
                  <div className="cta-buttons">
                      <a href="tel:+905432064055" className="btn btn-primary">
                          <i className="fas fa-phone"></i> Hemen Ara
                      </a>
                      <a href="#hizmetler" className="btn btn-secondary">
                          <i className="fas fa-wrench"></i> Hizmetlerimiz
                      </a>
                  </div>
              </div>
          </div>
      </section>

      {/* Services & About The Expert Section */}
      <section className="services" id="hizmetler">
          <div className="container">
              <div className="section-title">
                  <h2>Uzmanından Profesyonel Çözümler</h2>
                  <p>Kişisel dokunuş ve tecrübe ile kombi ve klima ihtiyaçlarınız için buradayım</p>
              </div>
              <div className="services-main-grid">
                  <div className="about-expert-card">
                      <div className="expert-header">
                          <div className="expert-photo">
                              <i className="fas fa-user-tie"></i>
                          </div>
                          <div className="expert-info">
                              <h3>Mert Bayram</h3>
                              <p>Kombi & Klima Uzmanı</p>
                          </div>
                      </div>
                      <div className="expert-credentials">
                          <span><i className="fas fa-award"></i> 10+ Yıl Tecrübe</span>
                          <span><i className="fas fa-certificate"></i> MYK Belgeli</span>
                          <span><i className="fas fa-user-check"></i> Ustalık Belgeli</span>
                      </div>
                      <p className="expert-bio">
                          Merhaba, ben Mert Bayram. Samsun Atakum'da 10+ yıllık mesleki deneyimim ile kombi ve klima sistemlerinde yaşanan her türlü arıza, bakım ve montaj işlemlerinde çözüm ortağınız olmaktan mutluluk duyuyorum. Atakum ve İlkadım başta olmak üzere, tüm kombi ve klima markalarına yönelik hızlı ve kalıcı çözümler üretiyorum.
                      </p>
                  </div>
                  <div className="core-services-grid">
                      <ServiceCard iconClass="fas fa-fire" title="Kombi Bakım & Onarım" description="Tüm marka kombilerin arıza tespiti, parça değişimi ve periyodik bakımı."/>
                      <ServiceCard iconClass="fas fa-snowflake" title="Klima Bakım & Onarım" description="Gaz dolumu, filtre temizliği, iç ve dış ünite bakımı ve arıza giderme."/>
                      <ServiceCard iconClass="fas fa-hammer" title="Profesyonel Montaj" description="Sıfır veya ikinci el kombi ve klima sistemlerinizin güvenli montajı."/>
                      <ServiceCard iconClass="fas fa-thermometer-half" title="Petek & Tesisat Temizliği" description="Isınma verimini artıran, makine ile profesyonel petek ve tesisat temizliği."/>
                  </div>
              </div>
              <div className="supported-brands">
                  <h3 className="brands-title">Tüm Markalara Profesyonel Çözümler</h3>
                  <div className="brands-logo-grid">
                      {['Daikin', 'Bosch', 'Buderus', 'Ferroli', 'E.C.A.', 'Baymak', 'Demirdöküm', 'Ariston', 'Alarko', 'Vaillant', 'Viessmann', 've Diğerleri...'].map(brand => (
                          <div key={brand} className="brand-item">{brand}</div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* Features Section */}
      <section className="features">
          <div className="container">
              <div className="section-title">
                  <h2 style={{ color: 'white' }}>Neden Bizi Seçmelisiniz?</h2>
              </div>
              <div className="features-grid">
                  <div className="feature-item">
                      <div className="feature-icon"><i className="fas fa-user-tie"></i></div>
                      <h3>Uzman Teknisyenler</h3>
                      <p>10+ yıllık deneyimli ve sertifikalı teknisyen kadromuz</p>
                  </div>
                  <div className="feature-item">
                      <div className="feature-icon"><i className="fas fa-shield-alt"></i></div>
                      <h3>Garantili Hizmet</h3>
                      <p>Tüm işlerimize 1 yıl garanti veriyoruz</p>
                  </div>
                  <div className="feature-item">
                      <div className="feature-icon"><i className="fas fa-tachometer-alt"></i></div>
                      <h3>Hızlı Müdahale</h3>
                      <p>30 dakika içinde adresinizde</p>
                  </div>
                  <div className="feature-item">
                      <div className="feature-icon"><i className="fas fa-money-bill-wave"></i></div>
                      <h3>Uygun Fiyat</h3>
                      <p>Piyasanın en uygun fiyatları</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="iletisim">
        <div className="container">
          <div className="section-title">
            <h2>İletişim</h2>
            <p>Bizimle iletişime geçin, size yardımcı olalım</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>İletişim Bilgileri</h3>
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-phone"></i></div>
                <div><strong>Telefon</strong><br />0543 206 40 55</div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fab fa-whatsapp"></i></div>
                <div><strong>WhatsApp</strong><br />0543 206 40 55</div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div><strong>Adres</strong><br />Büyükkolpınar, 1250.sokak no:19, 55200 Atakum/Samsun</div>
              </div>
              <div className="contact-map" style={{ marginTop: '1rem' }}>
                <iframe
                  title="Google Harita Konumu"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.699415107487!2d36.29301732716694!3d41.31540224545222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4088799777027a85%3A0x2a703c045375f56!2sSamsun%20Klima%20%26%20Kombi%20Bak%C4%B1m%20%7C%20Uraz%20Teknik%20Is%C4%B1tma%20ve%20So%C4%9Futma%20Sistemleri!5e0!3m2!1str!2str!4v1750631873399!5m2!1str!2str"
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
            <div className="contact-form">
              <h3>Hızlı İletişim</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Ad Soyad</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleFormChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleFormChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Hizmet Türü</label>
                  <select id="service" name="service" value={formData.service} onChange={handleFormChange}>
                    <option>Kombi Bakım</option>
                    <option>Kombi Onarım</option>
                    <option>Klima Bakım</option>
                    <option>Klima Onarım</option>
                    <option>Montaj</option>
                    <option>Acil Servis</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mesaj</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleFormChange} rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <i className="fas fa-paper-plane"></i> Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="reviews" id="yorumlar">
        <div className="container">
          <div className="section-title">
            <h2>Müşterilerimiz Ne Diyor?</h2>
            <p>Google İşletme sayfamızdan gerçek kullanıcı yorumları</p>
          </div>
          <div className="reviews-grid">
            {mainPageReviews.map((review, index) => ( // Artık 'mainPageReviews' kullanılıyor
              <ReviewCard
                key={index}
                name={review.name}
                text={review.text}
                stars={review.stars}
                link={googleReviewLink}
              />
            ))}
          </div>
          {/* YENİ EKLENEN BUTON */}
          <div className="gallery-more-link">
              <Link to="/yorumlar" className="btn btn-secondary" style={{color: 'black', borderColor: '#ccc'}}>
                  Tüm Yorumları Oku <i className="fas fa-arrow-right"></i>
              </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery" id="galeri">
        <div className="container">
          <div className="section-title">
            <h2>Çalışmalarımızdan Kareler</h2>
            <p>Tamamladığımız işlerden bazı örnekler</p>
          </div>
          <GalleryGrid images={mainPageImages} />
          <div className="gallery-more-link">
            <Link to="/galeri" className="btn btn-secondary" style={{color: 'black'}}>
              Tüm Çalışmalarımızı Gör <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;