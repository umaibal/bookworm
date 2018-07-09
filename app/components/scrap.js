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
import GameList from '../GameList';
import CollectionTitle from '../CollectionTitle';
import SearchBar from '../SearchBar';
import Fetch from 'react-fetch-component';
import ApolloClient, {gql} from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {Mutation} from 'react-apollo';

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

class CollectionPage extends React.Component {
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
          <CollectionTitle />
          <SearchBar />

          <ApolloProvider client={client}>
          <Fetch url="https://boardgameslist.herokuapp.com/" as="json">
      {(fetchResults) => {
        if (fetchResults.loading) {
          return <p>Loading</p>
        }

        if (fetchResults.error) {
          return <p>failed to fetch games</p>
        }

        return (


    <Mutation mutation={CREATE_PRODUCT}>
      {(createProduct, mutationResults) => {
        const loading = mutationResults.loading && <p>loading... </p>;

        const error = mutationResults.error && <p>error creating product</p>;

        const success = mutationResults.data && (
          <p>
            successfully created &nbsp;
            {mutationResults.data.productCreate.product.title}
          </p>
        );

        return (
          <React.Fragment>
            <link rel="stylesheet" href="https://sdks.shopifycdn.com/polaris/2.2.0/polaris.min.css" />
            <AppProvider>

        <Card>
        <GameList
              games={fetchResults.data}
              onAddGame={(title) => {
                const productInput = {
                  title: title,
                  productType: 'board game',
                };

                createProduct({
                  variables: {product: productInput},
                });
              }}
            />

          {
            /* */

          }
          </Card>
          </AppProvider>

            {
              /* */
            }

            {loading}
            {error} /* not found */
            {success} /* normal */
          </React.Fragment>
        );
      }}
    </Mutation>)}}
    </Fetch>
    </ApolloProvider>

        </div>
      </AppProvider>
      </React.Fragment>
    );
  }
}

export default CollectionPage;
