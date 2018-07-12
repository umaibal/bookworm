import React from 'react';
import ProductList from './components/ProductList';
import WriteReviewForm from './components/WriteReviewForm';
import CollectionPage from './components/CollectionPage';
import SearchPage from './components/SearchPage';
import WelcomePage from './components/WelcomePage';
/* */
// import BookList from './components/BookList';
/* */
import Fetch from 'react-fetch-component';
import ApolloClient, {gql} from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {Mutation} from 'react-apollo';
import {AppProvider, Page, Card, Button, DisplayText} from '@shopify/polaris';
import {Switch, Route, withRouter} from 'react-router';
import RoutePropagator from '@shopify/react-shopify-app-route-propagator';

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include',
  },
});

const Propagator = withRouter(RoutePropagator);

export default function() {
  return (
    <AppProvider>
    <div>
    <link rel="stylesheet" href="https://sdks.shopifycdn.com/polaris/2.2.0/polaris.min.css" />
    <Page>
    <React.Fragment>
    <Propagator />
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      // <Route exact path="/new" component={WriteReviewForm} />
      // <Route exact path="/collection" component={CollectionPage} />
      // <Route exact path="/search" component={SearchPage} />
    </Switch>
    </React.Fragment>
    </Page>
    </div>
    </AppProvider>
  );
}
