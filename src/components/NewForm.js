import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class NewPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      file: '',
      imagePrev: ''
    }
    this.timer = this.timer.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleImage(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePrev: reader.result
      })

    }
    reader.readAsDataURL(file);
  }

  onSubmit(e) {
    e.preventDefault();

    const info = {
      title: this.refs.title.value.trim(),
      description: this.refs.description.value.trim(),
      path: this.state.imagePrev,
    }
    this.props.setImage(info);

    this.refs.title.value = "";
    this.refs.description.value = "";
    this.refs.image.value = "";

    this.timer()

  }

timer() {
  setTimeout(() => {
    browserHistory.push('/')
  }, 4000);
}

  render() {
    let {imagePrev} = this.state;
    // let imagePreview = null;
    // if (imagePrev) {
    //   imagePreview = ( <img src={imagePrev} /> );
    // }

    return (
      <div>
        <div>
          <h3 className="ui center aligned icon header">
            New Post
          </h3>
        </div>
        <div className="ui grid container">
          <div className="ui two column centered grid">
            <div className="column">
              <form onSubmit={this.onSubmit} action="" encType="multipart/form-data" className="ui form" noValidate>
                <div className="field">
                  <label>Title</label>
                  <input ref="title" type="text" placeholder="Title" />
                </div>
                <div className="field">
                  <label>Description</label>
                  <textarea rows="5" ref="description" placeholder="Description" ></textarea>
                </div>
                {/*<div className="field">
                  <label>Tags</label>
                  <div className="ui fluid multiple search selection dropdown" id="tag">
                    <input name="tags" type="hidden"/>
                      <i className="dropdown icon"></i>
                      <div className="default text">Tags</div>
                      <div className="menu">
                        <div className="item" data-value="puppy">puppy</div>
                        <div className="item" data-value="kitten">kitten</div>
                      </div>
                  </div>
                </div> */}
                <div className="field">
                  <label>Image</label>
                  <input type="file" id="fileinput" ref="image" onChange={this.handleImage}/>
                </div>
              {/*  {imagePreview}  */}
                <button className="ui primary button" type="submit"> Post </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
