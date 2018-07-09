import React from 'react';
import {Card, Button} from '@shopify/polaris';

import BookItem from './BookItem';

export default function BookList({books = [], onAddBook}) {
  const bookItems = books.map((book) => (
    <BookItem key={book.name} book={book} onAddBook={onAddBook} />
  ));

  return <p>{bookItems}</p>;
}
