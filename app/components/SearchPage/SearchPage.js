import React from 'react';
import {
  AppProvider,
  Avatar,
  Badge,
  Card,
  Button,
  Icon,
  TextField,
  Stack,
  Form,
} from '@shopify/polaris';

import SearchTitle from '../SearchTitle';
import SearchBar from '../SearchBar';
import Select from '../Select';

class SearchPage extends React.Component {
  state = {
    customerName: '',
    productName: '',
    rating: 0,
    reviewText: '',
  }

  render() {
    return(
      <React.Fragment>
      <link rel="stylesheet" href="https://sdks.shopifycdn.com/polaris/2.2.0/polaris.min.css" />
        <AppProvider>
          <div>
            <SearchTitle />
            <SearchBar />
            <Select />
            <Button
              size="slim"
              onClick={() => {
                console.log("hello");
                }}
            >Search</Button>
          </div>
        </AppProvider>
      </React.Fragment>
    );
  }
}

export default SearchPage;
