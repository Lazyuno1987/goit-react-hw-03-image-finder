import React from 'react';
import {  toast } from 'react-toastify';
import PropTypes from 'prop-types';
import {Form, Input} from './Searchbar.stayled'

export default class Searchbar extends React.Component {
  state = {
    name: '',
  };

     static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
    handleInputChange = event => {
    //   console.log(event.currentTarget.value)
    // const { value } = event.currentTarget;
    this.setState({
      name: event.currentTarget.value.toLowerCase()
    });
  };

  reset = () => {
    this.setState({ name: '' });
  };

  handelSubmit = event => {
      event.preventDefault();
      if (this.state.name.trim() === '') {
          toast("Enter something")
          return
      }
    this.props.onSubmit(this.state.name );
    this.reset();
    };
    

  render() {
    return (
      <header >
        <Form  onSubmit={this.handelSubmit}>
          <Input
            
            type="text"
            autoComplete="off"
            autoFocus
            onChange={this.handleInputChange}
            placeholder="Search images and photos"
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </Form>
      </header>
    );
  }
}
