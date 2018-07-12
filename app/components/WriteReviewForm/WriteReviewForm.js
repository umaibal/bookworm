import React from 'react';
import {
  Card,
  TextField,
  FormLayout,
  Page,
  SkeletonPage,
  SkeletonBodyText,
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
    descriptionHtml: '',
    vendor: '',
  };

  handleChange = (field) => {
    return(value) => this.setState({[field]: value});
  };

  render() {
    const {title, price, descriptionHtml, vendor} = this.state;

    function mutate(createProduct) {
      const productInput = {
        title: title,
        descriptionHtml: descriptionHtml,
        vendor: vendor
      };

      createProduct({
        variables: {product: productInput},
      });
      console.log("mutation is a success");
    }

    return (
      <ApolloProvider client={client}>
      <Mutation mutation={CREATE_PRODUCT}>
      {
        (createProduct, mutationResults) => {
          const loading = mutationResults.loading && (
         <SkeletonPage title="Products" secondaryActions={1}>
            <Layout>
              <Layout.Section>
                <Card sectioned>
                  <SkeletonBodyText />
                </Card>
              </Layout.Section>
            </Layout>
          </SkeletonPage>);

          const error = mutationResults.error && <p>error creating product</p>

          const success = mutationResults.data && (
            <p>successfully created &nbsp; {
              mutationResults.data.productCreate.product.title
            }
            </p>);

            return (
              <Page>
              <Card title="Create a New Book" sectioned
              secondaryFooterAction={{
                content: 'CREATE',
                onAction: () => {
                  mutate(createProduct);
                }}}>
                <FormLayout>
                <TextField label="Book Name" value={title} placeholder="Your Favorite Book" type="text" onChange={this.handleChange('title')}/>
                <TextField label="Description" value={descriptionHtml} placeholder="The most mysterious novel in existance..." type="text" onChange={this.handleChange('descriptionHtml')}/>
                <TextField label="Vendor" value={vendor} placeholder="Indigo" type="text" onChange={this.handleChange('vendor')}/>
                <TextField label="Price" value={price} type="number" onChange={this.handleChange('price')} helpText={<div> Please enter only numbers for prices</div>}/>
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
