import SEO from '../components/SEO';
import ReviewCard from '../components/ReviewCard';
import { allReviewsData } from '../data/reviewsData'; // Tüm yorum verisini al
import { HashLink } from 'react-router-hash-link';

function ReviewsPage() {
  const googleReviewLink = "https://www.google.com/maps/place/Samsun+Klima+%26+Kombi+Bak%C4%B1m+%7C+Uraz+Teknik+Is%C4%B1tma+ve+So%C4%9Futma+Sistemleri/@41.3109548,36.2880145,14z/data=!4m8!3m7!1s0x4088799777027a85:0x2a703c045375f56!8m2!3d41.314893!4d36.2941137!9m1!1b1!16s%2Fg%2F11xh1zhjwr?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D";

  return (
    <>
      <SEO
        title="Müşteri Yorumları | Uraz Teknik | Samsun Kombi & Klima Servisi"
        description="Müşterilerimizin Uraz Teknik hakkındaki gerçek deneyimlerini ve yorumlarını okuyun. Samsun'da güvenilir ve kaliteli hizmetin kanıtı."
        canonicalUrl="https://www.urazteknik.com.tr/yorumlar"
      />
      
      {/* Sayfaya Özel Hero Alanı */}
      <section className="page-hero">
          <div className="container">
              <h1>Müşteri Yorumları</h1>
              <p>Hizmet kalitemizi en iyi müşterilerimiz anlatır.</p>
          </div>
      </section>

      {/* Genişletilmiş Yorumlar Alanı */}
      <main className="reviews" style={{ padding: '80px 0' }}>
          <div className="container">
              <div className="reviews-grid">
                  {allReviewsData.map((review, index) => (
                      <ReviewCard
                          key={index}
                          name={review.name}
                          text={review.text}
                          stars={review.stars}
                          link={googleReviewLink}
                      />
                  ))}
              </div>
          </div>
      </main>
      
      {/* Harekete Geçirici Mesaj (Call to Action) */}
      <section className="features" style={{ padding: '60px 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
              <h2 style={{ color: 'white', fontSize: '2.2rem' }}>Siz de Memnun Müşterilerimiz Arasına Katılın</h2>
              <p style={{ color: 'white', fontSize: '1.2rem', marginTop: '1rem', marginBottom: '2rem' }}>
                  İhtiyaçlarınıza özel çözümler için bizimle iletişime geçin.
              </p>
              <HashLink smooth to="/iletisim" className="btn btn-primary">
                  <i className="fas fa-phone"></i> Hemen İletişime Geçin
              </HashLink>
          </div>
      </section>
    </>
  );
}
export default ReviewsPage;
