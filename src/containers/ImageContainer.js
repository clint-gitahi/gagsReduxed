import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';   // wrap action creators in dispatch calls.
import Immutable from 'immutable';

import * as imageActionCreators from '../actions/images';
import { PhotoList, Modal } from '../components';

class ImageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPhoto: {},
    };


    this.toggle = this.toggle.bind(this);
    this.deletePhotos = this.deletePhotos.bind(this);
    this.setsearchBar = this.setsearchBar.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
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
    this.props.imageActions.getImages();
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

  // dispatch the action
  setsearchBar(e) {
    this.props.imageActions.setSearchBar(e.target.value.toLowerCase());
  }

  render() {
    const { selectedPhoto } = this.state;
    const { photos, search } = this.props;

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

// give our  container access to the state information as props.
function mapStateToProps(state) {
  return {
    photos: state.getIn(['images', 'list'], Immutable.List()).toJS(),
    search: state.getIn(['images', 'searchword'], '')
  }
}

// dispatch actions to the reducer and sagas.
function mapDispatchToProps(dispatch) {
  return {
    imageActions: bindActionCreators(imageActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer);
