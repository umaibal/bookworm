import React from 'react';
import {Button, Card, Heading} from '@shopify/polaris';

export default function GameItem({onAddGame, game: {name}}) {
  return (
    <Card.Section>
      <Heading>{name}</Heading>
      <Button primary
        onClick={() => {
          onAddGame(name);
        }}
      >
        Create product
      </Button>
      </Card.Section>
  );
}
