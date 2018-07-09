import React from 'react';
import {TextField} from '@shopify/polaris';

class SearchBar extends React.Component {
  state = {
    value: '',
  };
  handleChange = (value) => {
    this.setState({value});
  };
  render() {
    // if title search selected
    return (
      <React.Fragment>
      <link rel="stylesheet" href="https://sdks.shopifycdn.com/polaris/2.2.0/polaris.min.css" />

      <TextField
        label="Type title here"
        value={this.state.value}
        onChange={this.handleChange}
        placeholder="e.g. The Hunger Games, Nancy Drew"
      />
      </React.Fragment>
    );
    // else if author search selected
    /*
    return (
      <TextField
        label="Type author name here"
        value={this.state.value}
        onChange={this.handleChange}
        placeholder="e.g. Harper Lee, Stephen King"
      />
    );
    */
  }
}
export default SearchBar;
