import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function GalleryGrid({ images }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleLightbox = (imageIndex) => {
    setIndex(imageIndex);
    setOpen(true);
  };

  const slides = images.map(image => ({ src: image.full }));

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, idx) => (
          <div key={idx} className="gallery-item" onClick={() => toggleLightbox(idx)}>
            <img src={image.thumb} alt={image.alt} />
            <div className="gallery-overlay"><i className="fas fa-search-plus"></i></div>
          </div>
        ))}
      </div>
      <Lightbox open={open} close={() => setOpen(false)} slides={slides} index={index} />
    </>
  );
}
export default GalleryGrid;