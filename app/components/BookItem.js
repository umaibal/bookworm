import React from 'react';
import {Button, Card, Heading} from '@shopify/polaris';

export default function BookItem({onAddBook, book: {title}}) {
  return (
    <Card.Section>
      <Heading>{title}</Heading>
      <Button primary
        onClick={() => {
          onAddBook(title);
        }}
      >
        Create book
      </Button>
      </Card.Section>
  );
}
