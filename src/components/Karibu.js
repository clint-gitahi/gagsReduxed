import React, { Component } from 'react';
// import { Link } from 'react-router';
import {ImageContainer} from '../containers'

export default class Karibu extends Component {
  render() {
    return (
      <div>
        <div>
          <h2 className="ui center aligned icon header">
            <i className="circular teal users icon"></i>
             Welcome to CloneGram
          </h2>
        </div>
        <div>
          <ImageContainer />
        </div>
      </div>
    );
  }
}
