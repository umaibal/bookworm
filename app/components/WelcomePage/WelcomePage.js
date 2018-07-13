import React from 'react';
import WelcomeText from '../WelcomeText';
import {
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
      <WelcomeText/>
      </Page>
      </React.Fragment>
    );
  }
}

export default WelcomePage;
