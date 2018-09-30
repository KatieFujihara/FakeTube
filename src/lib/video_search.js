import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDvPvEioXKpKXQf48rA0o6H-RNiYIhzywE';

const videoSearch = function(term) {
  this.setState('surfboard')
  YTSearch({key: API_KEY, term: term}, (videos) => {
    this.setState({
      videos : videos,
      selectedVideo: videos[0]
    })
    // this.setState({ videos: videos});
  });
  const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
};

export {videoSearch};