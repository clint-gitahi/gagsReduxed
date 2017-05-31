import React, { Component } from 'react';
// import jquery from 'jquery';
import { PhotoList, Modal } from '../components'

class ImageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      selectedPhoto: {},
      search: ''
    };


    this.toggle = this.toggle.bind(this);
    this.deletePhotos = this.deletePhotos.bind(this);
    this.setsearchBar = this.setsearchBar.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
    console.log(this.state.photos)
  }

  toggle(index) {
    this.setState({
      selectedPhoto: this.state.photos[index]
    });
    const $ = window.$;
    $('.ui.modal')
  .modal('show')
;
  }

  getPhotos() {
    fetch('http://localhost:4000/gram', {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .then(data => this.setState({ photos: data}))
  }

  deletePhotos(id) {
    console.log('deleting....', id);
    fetch(`http://localhost:4000/gram/${id}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        photos: this.state.photos.filter(img => img._id !== id)
      })
      console.log(res.message);
      console.log(this.state);
    })
  }

  setsearchBar(e) {
    this.setState({ search: e.target.value.toLowerCase() })
  }

  render() {
    const { photos, selectedPhoto, search } = this.state;

    return (
      <div>
        <Modal
          img={selectedPhoto}
        />

        <PhotoList
          photos={photos}
          search={search}
          setsearchBar={this.setsearchBar}
          deletePhoto={this.deletePhotos}
          toggle={this.toggle}
        />
      </div>
    );
  }
}

export default ImageContainer;
