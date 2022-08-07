import { Img } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ largeImage, webformatURL, toggleModal }) => {
  return (
    <li>
      <Img
        onClick={() => toggleModal(largeImage)}
        src={webformatURL}
        alt="pict"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
