import React from 'react';
import { List } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ articles, toggleModal }) => {
  return (
    <List>
      {articles.map(({ id, largeImageURL, webformatURL }) => (
        <ImageGalleryItem
          toggleModal={toggleModal}
          key={id}
          webformatURL={webformatURL}
          largeImage={largeImageURL}
        />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  articles: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
