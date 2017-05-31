import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class Modal extends Component {

  render() {
    const { _id, i, title, description, image, created_at, image_id } = this.props.img;

    return (
      <div className="ui modal">
        <i className="close icon"></i>
        <div className="header">
          Image
        </div>
        <div className="image content">
          <div className="ui medium image">
            <img src={image} />
          </div>

          <div className="description">
            <h4>
              {title}
            </h4>
            <h5>
              {description}
            </h5>
          </div>
        </div>
        <div className="actions">
          <Button basic color='green'>Edit</Button>
        </div>
      </div>
    )
  }
}

export default Modal;
