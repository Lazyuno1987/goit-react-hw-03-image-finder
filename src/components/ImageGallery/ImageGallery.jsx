import React from 'react';
import Axios from 'axios';
import { List, ImgModal, Button } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal'
Axios.defaults.baseURL = 'https://pixabay.com/api';

export default class ImageGallery extends React.Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
    showModal: false,
    larg: '',
    page: 1,
    
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props || prevState.page !== this.state.page ) {
      console.log(prevProps.name);
      console.log(this.props.name);
      const response = await Axios.get(
        `/?q=${this.props.name}&page=${this.state.page}&key=28074243-fd9335165c63977f864a46342&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState({ articles: response.data.hits });
    }
    if (prevProps.name !== this.props.name) {
      this.setState({ page: 1 })
   }

  }

  toggleModal = largeImage => {
  this.setState(({ showModal}) => ({
    showModal: !showModal,
  }));
   
    this.setState({ larg: largeImage })
    console.log(this.state.larg)
    
  };

  loadMore = () => {
    
    this.setState(prevState => ({
     page: prevState.page + 1
   }))
  }

  render() {
    const { articles } = this.state;
    console.log(articles)
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
            onClose={this.toggleModal}>
            <ImgModal src={this.state.larg}  alt=''/>
          </Modal>
        )}

      </List>
        <Button onClick={this.loadMore} type='button'>Load More</Button>
      </>
    );
  }
}
