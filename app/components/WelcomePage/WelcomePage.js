import React from 'react';
import WelcomeTitle from '../WelcomeTitle';
import WelcomeText from '../WelcomeText';
import WriteReviewForm from '../WriteReviewForm';
import CollectionPage from '../CollectionPage';
import SearchPage from '../SearchPage';
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
  DisplayText,
} from '@shopify/polaris';

class WelcomePage extends React.Component {

  render() {
    return(
      <React.Fragment>
      <link rel="stylesheet" href="https://sdks.shopifycdn.com/polaris/2.2.0/polaris.min.css" />
      <Page
      title="Bookworm App"
      secondaryActions={[
        {content: 'New', url: '/new'},
        {content: 'View Collection', url: '/collection'},
        {content: 'Search', url: '/search'}
      ]}
      >
      <DisplayText size="medium">Where you can never lose track of a book!</DisplayText>
      </Page>
      </React.Fragment>
    );
  }
}

export default WelcomePage;
