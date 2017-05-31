import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link, } from 'react-router';
import { Form } from '../components'

class AddImage extends Component {
  constructor(props) {
    super(props);

    this.state = { newImage: {}}

    //this.submit = this.submit.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      children: nextProps.children
    })
  }

  setImage(info) {
    fetch('http://ec2-54-179-164-39.ap-southeast-1.compute.amazonaws.com/gram', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(info)
    })
    .then(res => {
        res.json()
      })
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/"><Button basic color="violet">Back</Button></Link>
        </div>
        <div>
          <Form
            setImage={this.setImage}
          />
        </div>
      </div>
    );
  }
}

export default AddImage;
