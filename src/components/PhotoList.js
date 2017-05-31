import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'semantic-ui-react';
import Photo from './Photo';

class PhotoList extends Component {
  render() {
    const { photos, deletePhoto, toggle, setsearchBar, search } = this.props;

    return (
      <div>
        <div>
          <Link to="/new"><Button basic color="purple">Add New Photos</Button></Link>
        </div>

        <div className="ui grid container">
          <div className="ui two column centered grid">
            <div className="ui search">
              <div>
                <div className="ui icon input">
                  <input className="prompt" type="text" placeholder="Search Title..." onKeyUp={setsearchBar}/>
                  <i className="search icon"></i>
                </div>
              </div>
              <div className="results"></div>
            </div>
          </div>
        </div>


        <div className="ui grid container">
          <div className="ui three column grid">
            {
              photos
                .filter(img => img.title.toLowerCase().includes(search))
                .map((img, i) => {
                  return (
                    <Photo
                      {...img}
                      key={img._id}
                      i={i}
                      deletePhoto={deletePhoto}
                      toggle={toggle}
                    />
                  );
                })
            }
          </div>
        </div>

      </div>
    );
  }
}

export default PhotoList
