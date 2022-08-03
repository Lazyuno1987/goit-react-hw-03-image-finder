// 28074243-fd9335165c63977f864a46342
import React from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  ImageGallery  from './ImageGallery/ImageGallery';

// import { nanoid } from 'nanoid';
import Searchbar from './Searchbar/Searchbar';
// import { Audio } from  'react-loader-spinner'
// import { nanoid } from 'nanoid';


class App extends React.Component {
  state = {
     names:'',
   }


  onSubmitForm = name  => {
    this.setState({ names: name})
  } ;

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmitForm} />
        <ToastContainer autoClose={3000}
        />
        <ImageGallery name={this.state.names} />
      </div>
    );
  }
}

export default App