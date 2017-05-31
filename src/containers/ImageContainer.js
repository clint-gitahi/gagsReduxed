import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';   // wrap action creators in dispatch calls.
import Immutable from 'immutable';

import * as imageActionCreators from '../actions/images';
import { PhotoList, Modal } from '../components';

class ImageContainer extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.deletePhotos = this.deletePhotos.bind(this);
    this.setsearchBar = this.setsearchBar.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }

  toggle(index) {
    // we dispatch and toggle the modal.
    this.props.imageActions.selectedPhoto(this.props.photos[index])
    const $ = window.$;
    $('.ui.modal')
  .modal('show')
;
  }

  getPhotos() {
    this.props.imageActions.getImages();
  }

  deletePhotos(id) {
    this.props.imageActions.deletePhoto(id)
  }

  // dispatch the action
  setsearchBar(e) {
    this.props.imageActions.setSearchBar(e.target.value.toLowerCase());
  }

  render() {
    const { photos, search, selectedPhoto } = this.props;

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
    search: state.getIn(['images', 'searchword'], ''),
    selectedPhoto: state.getIn(['images', 'selectedPhoto'], Immutable.List()).toJS()
  }
}

// dispatch actions to the reducer and sagas.
function mapDispatchToProps(dispatch) {
  return {
    imageActions: bindActionCreators(imageActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer);
