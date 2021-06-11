export default {
  _url: 'https://pixabay.com/api/?image_type=photo&orientation=horizontal',
  _myKey: '21975280-7a157b064e0c46621c8cd5d61',

  async getImages(value, flagNewPage) {
  // e.preventDefault();
  let val = value.trim()
    
  if (val.length === 0) {
    return
  }
    const res = await fetch(
      this._url +
        '&q=' +
        value +
        '&page=' +
        flagNewPage +
        '&per_page=12&key=' +
        this._myKey,
    );
    return await res.json();
  },
};
