import React from 'react';
import {gql} from 'apollo-boost';
import {
  Select,
  Button
} from '@shopify/polaris';

//query to get products by their isbn:
// const PRODUCTS_BY_ISBN = gql `
// {
//   shop {
//     products(first: 5) {
//       edges {
//         node {
//           barcode
//         }
//       }
//     }
//   }
// }
// `;

class SelectExample extends React.Component {
  state = {
    selected: 'title',
  };

  handleChange = (newValue) => {
    this.setState({selected: newValue});

    // query for data based on new change:

  };

  render() {
    const options = [
      {label: 'Title', value: 'title'},
      {label: 'ISBN', value: 'isbn'},
    ];

    return (
      <Select
        label="Sort by:"
        options={options}
        onChange={this.handleChange}
        value={this.state.selected}
      />
    );
  }
}

export default Select;
