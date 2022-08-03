import {ModalBack, ModalContent} from './Modal.styled'

import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    
  
   componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
     this.props.onClose();
    }
  };

  handleBackdropClick = event => {
if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  
  
  render() {
    return createPortal(
      <ModalBack onClick={this.handleBackdropClick}>
        <ModalContent>
          {this.props.children}
        </ModalContent>
      </ModalBack>, modalRoot,
    )
  }
}