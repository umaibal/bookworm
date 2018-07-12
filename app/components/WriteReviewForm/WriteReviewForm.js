import React from 'react';
import {
  AppProvider,
  Avatar,
  Badge,
  Card,
  Button,
  Icon,
  TextField,
  FormLayout,
  Stack,
  Form,
  Page,
} from '@shopify/polaris';
import {Mutation, ApolloProvider} from 'react-apollo';
import ApolloClient, {gql} from 'apollo-boost';
import Rating from '../Rating';
import Fetch from 'react-fetch-component';

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
      description
      vendor
    }
  }
}
`;

export default class WriteReviewForm extends React.Component {
  state = {
    title: '',
    price: 0,
    description: '',
    vendor: '',
  };

  handleChange = (field) => {
    return(value) => this.setState({[field]: value});
  };

  render() {
    const {title, price, description, vendor} = this.state;

    function mutate(createProduct) {
      const productInput = {
        title: title,
        description: description,
        vendor: vendor
      };

      createProduct({
        variables: {product: productInput},
      });
      console.log("THIS WORKS WOOOOOO-MUTATION success");
    }

    return (
      <ApolloProvider client={client}>
      <Mutation mutation={CREATE_PRODUCT}>
      {
        (createProduct, mutationResults) => {
          const loading = mutationResults.loading && <p>loading...</p>

          const error = mutationResults.error && <p>error creating product</p>

          const success = mutationResults.data && (
            <p>successfully created &nbsp; {
            mutationResults.data.productCreate.product.title
          }
        </p>);

        return (
          <Page>
          <Card title="Create a New Book" sectioned>
          <FormLayout>
          <TextField label="Book Name" value={title} placeholder="Your Favorite Book" type="text" onChange={this.handleChange('title')}/>
          <TextField label="Description" value={description} placeholder="The most mysterious novel in existance..." type="text" onChange={this.handleChange('description')}/>
          <TextField label="Vendor" value={vendor} placeholder="Indigo" type="text" onChange={this.handleChange('vendor')}/>

          <TextField label="Price" value={price} type="number" onChange={this.handleChange('price')} helpText={<div> Please enter only numbers for prices</div>}/>

          <Button onClick={() => mutate(createProduct)}>CREATE</Button>
          </FormLayout>
          </Card>
          </Page>)
        }
      }
    </Mutation>
    </ApolloProvider>
    );
  }
}
