import React from 'react';
import Flickr from '../services/flickrApi';
import PhotosList from './photosList';

class Animal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photosUrls: []};
    this.api = new Flickr();
    this.getPhotos()
  }
  
  async getPhotos() {
    const res = await this.api.searchPhotos(this.props.animal);
    this.setState({photosUrls: res});
  }

  render() {
    return (
      <div>
        <h2>{this.props.animal}</h2>
        <br/>
        <PhotosList appPhotosUrls = {this.state.photosUrls}/>
      </div>
    )
  }
}

export default Animal;
