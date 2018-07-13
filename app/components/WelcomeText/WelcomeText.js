import React from 'react';
import {
  DisplayText
} from '@shopify/polaris';

export default function WelcomeText() {
  return(
    <React.Fragment>
    <link rel="stylesheet" href="https://sdks.shopifycdn.com/polaris/2.2.0/polaris.min.css" />
    <DisplayText size="small">Create books, view your collection, and more.</DisplayText>
    </React.Fragment>
  );
}
