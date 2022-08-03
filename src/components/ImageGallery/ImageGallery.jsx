import React from 'react';
import Axios from 'axios';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal'
Axios.defaults.baseURL = 'https://pixabay.com/api';

export default class ImageGallery extends React.Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
    showModal: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      console.log(prevProps.name);
      console.log(this.props.name);
      const response = await Axios.get(
        `/?q=${this.props.name}&page=1&key=28074243-fd9335165c63977f864a46342&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState({ articles: response.data.hits });
    }
  }

  toggleModal = () => {
  this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };


  render() {
    const { articles } = this.state;
    console.log(articles)
    return (
      <List>

      
        {articles.length > 0
          ? articles.map(({ id, webformatURL }) => (
            <ImageGalleryItem
              onClick={this.toggleModal}
              key={id}
              webformatURL={webformatURL} />
            ))
          : null}
        {this.state.showModal && (
          <Modal
            onClose={this.toggleModal}>
            <img src='https://pixabay.com/get/g0480996272bcb1bcead3ae3fea541e96c40a410c8805d01e6e11fcbbb9f585e9820f3d5de0ec56bbfcf0169054753ad4bb7a96d6d7d2c7f79c54cff5629354da_1280.jpg'  alt=''/>
          </Modal>
        )}

      </List>
    );
  }
}
