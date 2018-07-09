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
  Page,
} from '@shopify/polaris';
import {Mutation} from 'react-apollo';
import {gql} from 'apollo-boost';
import Rating from '../Rating';
import GameList from '../GameList';
import Fetch from 'react-fetch-component';
// import './WriteReviewForm.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include',
  },
});

const CREATE_PRODUCT = gql`
mutation CreateProduct($product: ProductInput!) {
  productCreate(input: $product) {
    product {
      id
      title
    }
  }
}
`;

export default class WriteReviewForm extends React.Component {
  state = {
    customerName: '',
    productName: '',
    rating: 0,
    reviewText: '',
  };

  handleChange = (value, id) => {
    this.setState({[id]: value});
  };

  render() {
    return (
      <ApolloProvider client={client}>
      <Page
      primaryAction={{content: 'Create'}}>
      <Fetch url="https://boardgameslist.herokuapp.com" as="json">
        {(fetchResults) => {
          if (fetchResults.loading) {
            return <p>Loading</p>
          }

          if (fetchResults.error) {
            return <p>failed to fetch games</p>
          }

          // return <GameList games={fetchResults.data} />
        }}

      </Fetch>


      <React.Fragment>
      <link rel="stylesheet" href="https://sdks.shopifycdn.com/polaris/2.2.0/polaris.min.css" />

      <AppProvider>
      <Form>
      <Stack spacing="loose" vertical>
      <Stack.Item>
      <Card title="Create a New Book" sectioned>
      <Stack vertical>
      <Stack alignment="center">
      <Stack.Item fill>
      <TextField
      placeholder="Book Name"
      id="productName"
      value={this.state.productName}
      onChange={this.handleChange}
      />
      </Stack.Item>
      <Stack.Item>
      <Rating
      value={this.state.rating}
      id="rating"
      onChange={this.handleChange}
      />
      </Stack.Item>
      </Stack>
      <Stack>
      <Stack.Item fill>
      <TextField
      placeholder="Write your description here..."
      id="reviewText"
      value={this.state.reviewText}
      onChange={this.handleChange}
      multiline
      />
      </Stack.Item>
      </Stack>
      </Stack>
      </Card>
      </Stack.Item>
      </Stack>
      </Form>
      </AppProvider>
      </React.Fragment>
      </Page>
    </ApolloProvider>
    );
  }
}
