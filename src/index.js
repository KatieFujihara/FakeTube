import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDvPvEioXKpKXQf48rA0o6H-RNiYIhzywE';

// Create a new component. This component should produce some HTML
// const is a ES6 concept declaring a constant variable
// JSX is a subset of JavaScript (looks like HTML but it's actually JavaScript)

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      // this.setState({ videos: videos});
    });
  }

  render() {
  return (
  <div>
    <SearchBar />
    <VideoList videos={this.state.videos} />
  </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
