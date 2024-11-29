
import '../assets/css/components/gallery.css';

// Importa las imágenes desde src
import img1 from '../assets/images/kids/kids1.jpg';
import img2 from '../assets/images/kids/kids2.jpg';
import img3 from '../assets/images/kids/kids3.jpg';
import img4 from '../assets/images/kids/kids4.jpg';
import img5 from '../assets/images/kids/kids5.jpg';
import img6 from '../assets/images/kids/kids6.jpg';
import img7 from '../assets/images/kids/kids7.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7];

const Gallery = () => {
  return (
    <div className="gallery ">
      {images.map((url, index) => (
        <div key={index} className="gallery-item">
          <img src={url} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
