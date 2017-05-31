import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  active(path) {
    if (this.props.location.pathname === path) {
      return 'active';
    }
  }

  render() {
    return (
      <div>
        <div className="ui secondary pointing menu">
              <div className="item">
                <a className={this.active('/')}><Link to="/">Home</Link></a>
              </div>
              <div className="item">
                <a className={this.active('/about')}><Link to="/about">About</Link></a>
              </div>
              <div className="item">
                <a className={this.active('/new')}><Link to="/new">NewPost</Link></a>
              </div>
              <div className="item right menu">
                <a className={this.active('/about')}><Link to="/about">Signin/Login</Link></a>
              </div>
        </div>

        {this.props.children}
      </div>

    )
  }
}
