import React from 'react';
import '../styles/photoList.css';

class PhotosList extends React.Component {
  render() {
    return (
      <div>
        {this.props.appPhotosUrls.map((url) =>
          <div className='imageGallery'>
            <img src={url} alt='content'></img>
          </div>
        )}
      </div>
    )
  }
}

export default PhotosList;
