import React, { Component } from 'react';

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
        onKeyPress={this.handleKeyPress}
        onChange={event => this.onInputChange(event.target.value)} />
        </div>
     );
  }
  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term);
    this.handleKeyPress(term);
  }
  
  handleKeyPress(term){
    if(term.key == 'Enter'){
      var newTerm = {term}.title
      console.log(newTerm)
      var db = new PouchDB ("dbnames")
      var remoteCouch = 'https://99e9c054-9eea-484d-92eb-f55313bd8b5a-bluemix	.cloudant.com/simplestarter/';

    
          var newSearch = {
            _id: new Date().toISOString(),
            title: newTerm,
          };
          db.put(newSearch).then(function(result){
            console.log('everything is okay');
            console.log(result);
          }).catch(function(err){
            console.log('everything is terrible');
            console.log(err);
          });
            function sync() {
              console.log('syncing');
        var opts = {live: true};
        db.replicate.to(remoteCouch, opts, syncError);
        db.replicate.from(remoteCouch, opts, syncError);
      }
      function syncError() {
        console.log('notsyncing')
      }
      if (remoteCouch) {
        sync();
        };
    
    }
  }
}


export default SearchBar;

// state plain javascript object used to record changes in object
