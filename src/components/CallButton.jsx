import React from 'react';

function CallButton() {
  const handleCallClick = () => {
    // Google Analytics takibi için (Opsiyonel)
    if (window.gtag) {
      window.gtag('event', 'telefon_tiklama', {
        'event_category': 'communication',
        'event_label': 'Floating Call Button'
      });
    }
  };

  return (
    <a 
      href="tel:+905432064055" 
      className="call-float" 
      onClick={handleCallClick}
    >
      <i className="fas fa-phone"></i>
    </a>
  );
}

export default CallButton;