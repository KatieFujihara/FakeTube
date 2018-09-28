import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDvPvEioXKpKXQf48rA0o6H-RNiYIhzywE';
// Create a new component. This component should produce some HTML
// const is a ES6 concept declaring a constant variable
// JSX is a subset of JavaScript (looks like HTML but it's actually JavaScript)

const App = () => {
  return <div>
    <SearchBar />
  </div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
