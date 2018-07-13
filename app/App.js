import React from 'react';
import WriteReviewForm from './components/WriteReviewForm';
import CollectionPage from './components/CollectionPage';
import SearchPage from './components/SearchPage';
import WelcomePage from './components/WelcomePage';
import About from './components/About'
import ApolloClient from 'apollo-boost';
import { AppProvider, Page } from '@shopify/polaris';
import { Switch, Route, withRouter } from 'react-router';
import RoutePropagator from '@shopify/react-shopify-app-route-propagator';

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include',
  },
});

const Propagator = withRouter(RoutePropagator);

export default function () {
  return (
    <AppProvider>
      <div>
        <link rel="stylesheet" href="https://sdks.shopifycdn.com/polaris/2.2.0/polaris.min.css" />
        <Page>
          <React.Fragment>
            <Propagator />
            <Switch>
              <Route exact path="/" component={WelcomePage} />
              <Route exact path="/new" component={WriteReviewForm} />
              <Route exact path="/collection" component={CollectionPage} />
              <Route exact path="/search" component={SearchPage} />
              <Route exact path="/about" component={About}/>
            </Switch>
          </React.Fragment>
        </Page>
      </div>
    </AppProvider>
  );
}
