
import React from 'react';
import Axios from "axios";
import {List} from './ImageGallery.styled'
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'

Axios.defaults.baseURL = "https://pixabay.com/api";



export default class ImageGallery extends React.Component {
    state = {
     articles: [],
       isLoading: false,
    error: null,
    };
    


    async componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            console.log(prevProps.name)
            console.log(this.props.name)
            const response = await Axios.get(`/?q=${this.props.name}&page=1&key=28074243-fd9335165c63977f864a46342&image_type=photo&orientation=horizontal&per_page=12`);
    this.setState({ articles: response.data.hits }); 
         }
    
  }

    render() {
    const { articles } = this.state;
        return (
        
      <List>
                {articles.length > 0 ? articles.map(({ id, webformatURL }) => (<ImageGalleryItem key={id } webformatURL={webformatURL} />))  : null}
      </List>
    );
  }
}
