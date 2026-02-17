import React from 'react';

function WhatsAppButton() {
  const trackWhatsApp = () => {
    // Analytics fonksiyonunun varlığını kontrol ediyoruz
    if (window.gtag) {
      window.gtag('event', 'whatsapp_tiklama', {
        'event_category': 'communication',
        'event_label': 'Floating WhatsApp Button',
        'value': 1
      });
    }
  };

  return (
    <a 
      href="https://wa.me/905432064055" 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      onClick={trackWhatsApp}
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}

export default WhatsAppButton;