import React, { Component } from 'react';

// use class component instead of functional component
class SearchBar extends Component {
  // only class state components have states, this is how you set it up
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
  // onChange is a React defined property
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

// state plain javascript object used to record changes in object
