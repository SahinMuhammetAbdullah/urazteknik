import { useState } from 'react';
import SEO from '../components/SEO';

function ContactPage() {
    
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
        title="İletişim | Uraz Teknik | Samsun Kombi & Klima Servisi"
        description="Uraz Teknik ile iletişime geçin. Samsun geneli kombi, klima arıza, bakım ve montaj talepleriniz için bize telefon, WhatsApp veya form üzerinden ulaşabilirsiniz."
        canonicalUrl="https://www.urazteknik.com.tr/iletisim"
      />

      <div className="contact" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.699415107487!2d36.29301732716694!3d41.31540224545222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4088799777027a85%3A0x2a703c045375f56!2sSamsun%20Klima%20%26%2B%20Kombi%20Bak%C4%B1m%20%7C%20Uraz%20Teknik%20Is%C4%B1tma%20ve%20So%C4%9Futma%20Sistemleri!5e0!3m2!1str!2str!4v1750631873399!5m2!1str!2str"
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
      </div>
    </>
  );
}

export default ContactPage;
