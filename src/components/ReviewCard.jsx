const StarRating = ({ rating }) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating); // Tam yıldız sayısı
    const hasHalfStar = rating % 1 !== 0;  // Yarım yıldız var mı? (Gelecek için eklendi)
    const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0); // Boş yıldız sayısı

    return (
        <div className="review-stars">
            {/* Dolu yıldızları render et */}
            {[...Array(fullStars)].map((_, index) => (
                <i key={`full-${index}`} className="fas fa-star"></i>
            ))}

            {/* Yarım yıldız varsa render et (Şu anki veride yok ama altyapı hazır) */}
            {hasHalfStar && <i className="fas fa-star-half-alt"></i>}

            {/* Boş yıldızları render et */}
            {[...Array(emptyStars)].map((_, index) => (
                <i key={`empty-${index}`} className="far fa-star"></i>
            ))}
        </div>
    );
};


function ReviewCard({ name, text, link, stars }) { // 'stars' prop'u eklendi
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="review-link">
            <div className="review-card">
                <div className="review-header">
                    <div className="reviewer-info">
                        <h3>{name}</h3>
                        {/* Statik yıldızlar yerine StarRating bileşenini kullanıyoruz */}
                        <StarRating rating={stars} />
                    </div>
                    <div className="review-source-icon">
                        <i className="fab fa-google"></i>
                    </div>
                </div>
                <h1 className="review-text">"{text}"</h1>
            </div>
        </a>
    );
}

export default ReviewCard;
