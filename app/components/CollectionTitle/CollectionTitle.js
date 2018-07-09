import React from 'react';
import {DisplayText} from '@shopify/polaris';

class CollectionTitle extends React.Component {
  render() {
    return(
      <React.Fragment>
      <link rel="stylesheet" href="https://sdks.shopifycdn.com/polaris/2.2.0/polaris.min.css" />
      <DisplayText size="extraLarge">Collection</DisplayText>
      </React.Fragment>

    );
  }
}

export default CollectionTitle;
