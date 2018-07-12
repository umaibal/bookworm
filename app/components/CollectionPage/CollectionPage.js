import React from 'react';
import {
  AppProvider,
  Avatar,
  Badge,
  Card,
  Button,
  Icon,
  TextField,
  DisplayText,
  Banner,
  FilterType,
  ResourceList,
  TextStyle,
  SkeletonPage,
  SkeletonBodyText,
  SkeletonDisplayText,
  Layout,
  TextContainer,
  Page,
  Spinner,
} from '@shopify/polaris';
import GameList from '../GameList';
import CollectionTitle from '../CollectionTitle';
import WelcomePage from '../WelcomePage';

import SearchBar from '../SearchBar';
import Select from '../Select';
import Fetch from 'react-fetch-component';
import ApolloClient, {gql} from 'apollo-boost';
import {ApolloProvider, Mutation, Query} from 'react-apollo';

// first query to get all products:
const ALL_PRODUCTS = gql `
{
  shop {
    products(first: 20) {
      edges {
        node {
          title
        }
      }
    }
  }
}
`;

// second query to sort all products by title:
const PRODUCTS_BY_TITLE = gql `
{
  shop {
    products(first: 20, sortKey: TITLE) {
      edges {
        node {
          title
          description
          vendor
          variants(first:20) {
            edges {
              node {
                price
              }
            }
          }
        }
      }
    }
  }
}
`;

// third query to get
// all products sorted by vendor
const PRODUCTS_BY_VENDOR = gql `
{
  shop {
    products(first: 20, sortKey: VENDOR) {
      edges {
        node {
          title
          description
          vendor
        }
      }
    }
  }
}
`;

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include',
  },
});

export default function CollectionPage() {
  return (
    <ApolloProvider client={client}>
    <DisplayText size="large">Book Collection</DisplayText>
    <Select />

    <Query query={ALL_PRODUCTS}>
    {
      ({loading, error, data}) => {
        if (loading)
        return (
          <SkeletonPage>
          <Layout>
          <Layout.Section>
          <Card sectioned>
          <TextContainer>
          <SkeletonDisplayText size="small" />
          <SkeletonBodyText />
          </TextContainer>
          </Card>
          </Layout.Section>
          </Layout>

          <div>
          <DisplayText size="small">LOADING...</DisplayText>
          <Spinner size="large" color="teal" />
          </div>
          </SkeletonPage>
        );

        if (error)
        return (
          <Banner
          title="Failed to load Collection content"
          action={{content: 'Go Back Home', url: '/'}}
          status="critical"
          >
          </Banner>
        );

        const products = data.shop.products.edges;
        return (
          <Card>
          <ResourceList resourceName={{
            singular: 'product',
            plural: 'products'
          }} items={products} renderItem={(item) => {
            const {id, title, price} = item.node;
            const media = <Avatar customer="customer" size="medium" name={title}/>;

            return (<ResourceList.Item id={id} media={media} accessibilityLabel={`View details for ${title}`}>
              <h3>
              <TextStyle variation="strong">{title}</TextStyle>
              </h3>
              </ResourceList.Item>);
            }}/>
            </Card>
          );
        }
      }
      </Query>

      <Query query={PRODUCTS_BY_TITLE}>
      {
        ({loading, error, data}) => {
          if (loading)
          return (
            <SkeletonPage>
            <Layout>
            <Layout.Section>
            <Card sectioned>
            <TextContainer>
            <SkeletonDisplayText size="small" />
            <SkeletonBodyText />
            </TextContainer>
            </Card>
            </Layout.Section>
            </Layout>

            <div>
            <DisplayText size="small">LOADING by price...</DisplayText>
            <Spinner size="large" color="teal" />
            </div>
            </SkeletonPage>
          );

          if (error)
          return (
            <Banner
            title="Failed to load Collection by price"
            action={{content: 'Go Back Home', url: '/'}}
            status="critical"
            >
            </Banner>
          );

          const products = data.shop.products.edges;
          return (
            <Card>
            <ResourceList resourceName={{
              singular: 'product',
              plural: 'products'
            }} items={products} renderItem={(item) => {
              const {id, title, price, description, vendor} = item.node;
              const media = <Avatar customer="customer" size="medium" name={title}/>;

              return (<ResourceList.Item id={id} media={media} accessibilityLabel={`View details for ${title}`}>
                <h3>
                <DisplayText size="medium">{title}</DisplayText>
                <DisplayText size="small">{description}</DisplayText>

                <Badge>{vendor}</Badge>




                <Badge>{price}</Badge>
                </h3>
                </ResourceList.Item>);
              }}/>
              </Card>
            );
          }
        }
        </Query>
    </ApolloProvider>
    )
  }
