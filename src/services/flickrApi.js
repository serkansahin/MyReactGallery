import Flickr from 'flickr-sdk';

class FlickrApi {
  constructor() {
    this.api = new Flickr(process.env.REACT_APP_FLICKR_API_KEY);
  }

  async searchPhotos(searchInput) {
    const res = await this.api.photos.search({tags: searchInput});

    if (res) {
      return res.body.photos.photo.map((item) => {
        return `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_n.jpg`;
      }).slice(0, 20);
    }

    return undefined;
  }
}

export default FlickrApi;
