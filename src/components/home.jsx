import React from 'react';
import SearchBar from './searchBar';
import PhotosList from './photosList';

class Home extends React.Component {
  state = {photosUrls: []};

  searchResults = (response) => {
    this.setState({photosUrls: response});
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
          <SearchBar appSearchCallback = {this.searchResults}/>
        <br/>
        <PhotosList appPhotosUrls = {this.state.photosUrls}/>
      </div>
    )
  }
}

export default Home;
