import "../assets/css/components/gallery.css";
import PropTypes from 'prop-types';

export const Gallery = ({ path, countImg, nameImg }) => {

  Gallery.PropTypes = {
    path: PropTypes.string.isRequired,
    nameImg: PropTypes.string.isRequired,
    countImg: PropTypes.number.isRequired
  };
  const images = [];
  const imageCount = countImg;
  const basePath = "/src/assets/images/" + path;
  for (let i = 1; i <= imageCount; i++) {
    images.push(`${basePath}${nameImg}${i}.jpg`);
  }

  return (
    <>
      <div className="gallery ">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img key={index} src={src} alt={`Kids ${index}`} />
          </div>
        ))}
      </div>
    </>
  );
};
