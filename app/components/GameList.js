import React from 'react';
import {Card, Button} from '@shopify/polaris';

import GameItem from './GameItem';

export default function GameList({games = [], onAddGame}) {
  const gameItems = games.map((game) => (
    <GameItem key={game.name} game={game} onAddGame={onAddGame} />
  ));

  return <p>{gameItems}</p>;
}
