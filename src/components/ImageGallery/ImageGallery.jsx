import React from 'react';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { List, ImgModal } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
Axios.defaults.baseURL = 'https://pixabay.com/api';

export default class ImageGallery extends React.Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
    showModal: false,
    larg: '',
    page: 1,
    status: 'idle',
  };
  
  static propTypes = { name: PropTypes.string.isRequired };

  async componentDidUpdate(prevProps, prevState) {
  
   
    if (
      prevProps.name !== this.props.name ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'pending' });
      const response = await Axios.get(
        `/?q=${this.props.name}&page=${this.state.page}&key=28074243-fd9335165c63977f864a46342&image_type=photo&orientation=horizontal&per_page=12`
      );

      this.setState(prevState => ({
        articles: [...prevState.articles, ...response.data.hits],
        status: 'resolved',
      }));

      if (prevProps.name !== this.props.name) {
        this.setState(() => ({ page: 1, articles: response.data.hits }));
      } if (response.data.hits.length === 0) {
      console.log('sdcsdc')
       toast.error('Enter something correct');
    }
    } 

  }

  toggleModal = largeImage => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));

    this.setState({ larg: largeImage });
    console.log(this.state.larg);
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { articles } = this.state;

    return (
      <>
        <List>
          {articles.length > 0
            ? articles.map(({ id, largeImageURL, webformatURL }) => (
                <ImageGalleryItem
                  onClick={this.toggleModal}
                  key={id}
                  webformatURL={webformatURL}
                  largeImage={largeImageURL}
                />
              ))
            : null}

          {this.state.showModal && (
            <Modal
              largeImageURL={this.props.largeImageURL}
              onClose={this.toggleModal}
            >
              <ImgModal src={this.state.larg} alt="" />
            </Modal>
          )}
        </List>
        {this.state.status === 'pending' && <Loader />}
        {this.state.articles.length > 0 && <Button onClick={this.loadMore} />}
      </>
    );
  }
}
