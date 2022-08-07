// 28074243-fd9335165c63977f864a46342
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { toast } from 'react-toastify';
import Axios from 'axios';
import { mapperImages } from '../Helpers/mappers';
import Modal from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

Axios.defaults.baseURL = 'https://pixabay.com/api';

class App extends React.Component {
  state = {
    nameInput: '',
    articles: [],
    isLoading: false,
    showModal: false,
    largImg: '',
    page: 1,
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.nameInput !== this.state.nameInput ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'pending' });
      const response = await Axios.get(
        `/?q=${this.state.nameInput}&page=${this.state.page}&key=28074243-fd9335165c63977f864a46342&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState(prevState => ({
        articles: [...prevState.articles, ...mapperImages(response.data.hits)],
        status: 'resolved',
      }));
      if (
        prevState.nameInput !== '' &&
        prevState.nameInput !== this.state.nameInput
      ) {
        this.setState(() => ({
          page: 1,
          articles: [],
        }));
      }
      if (response.data.hits.length === 0) {
        toast.error('Enter something correct');
      }
    }
  }

  toggleModal = largeImage => {
    this.setState({ largImg: largeImage });

    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onClose = () => {
    this.setState({ largImg: '' });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onSubmitForm = name => {
    this.setState(() => ({ nameInput: name, articles: [] }));
  };

  render() {
    const {articles, status, showModal, largImg}=this.state
    return (
      <div>
        <Searchbar onSubmit={this.onSubmitForm} />
        <ToastContainer autoClose={3000} />
        {articles.length !== 0 && (
          <ImageGallery
            toggleModal={this.toggleModal}
            articles={articles}
          />
        )}
        {status === 'pending' && <Loader />}
        {articles.length > 0 && <Button onClick={this.loadMore} />}
        {showModal && (
          <Modal largImage={largImg} onClose={this.toggleModal} />
        )}
      </div>
    );
  }
}

export default App;
