import { render, screen } from "@testing-library/react";

import BookCard from './BookCard'
const book = {volumeInfo: {categories: ['123', '321'], imageLinks: {thumbnail: '#'}, authors: ['author1', 'author2'], title: 'title'}}
test('renders book card', () => {
  render(<BookCard book={book} />);

  // expect(screen.getByRole('img').toBeInTheDocument())
});
