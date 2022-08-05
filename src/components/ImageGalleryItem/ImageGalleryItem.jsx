import { Img } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ onClick, largeImage, webformatURL }) => {
  return (
    <li>
      <Img
        onClick={() => {
          onClick(largeImage);
        }}
        src={webformatURL}
        alt="pict"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
