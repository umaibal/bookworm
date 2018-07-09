import React from 'react';
import {
  Card,
  Stack,
  DisplayText
} from '@shopify/polaris';

export default function WelcomeText() {
  return(
    <React.Fragment>
    <link rel="stylesheet" href="https://sdks.shopifycdn.com/polaris/2.2.0/polaris.min.css" />
    <DisplayText size="large">Never forget another book with Bookworm</DisplayText>
    <DisplayText size="small">Create reviews, view your collection, and more.</DisplayText>
    </React.Fragment>
  );
}
