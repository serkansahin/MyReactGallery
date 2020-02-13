import React from 'react';
import Flickr from '../services/flickrApi';

// Style
import '../styles/searchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.flickr = new Flickr();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.sendResponse()
  }

  async sendResponse() {
    var response = await this.flickr.searchPhotos(this.state.value);
    this.props.appSearchCallback(response);
  }

  render() {
    return (
      <div className='searchBar'>
        <form>
          <input type='text' value={this.state.value} onChange={this.handleChange}></input>
          <button onClick={this.handleSubmit}>Search</button>
        </form>
      </div>
    )
  }
}

export default SearchBar;
