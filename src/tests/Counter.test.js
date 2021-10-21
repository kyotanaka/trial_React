import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import Counter from '../components/Counter';

afterEach(cleanup)

test('renders', () => {
  render(
    <Counter />,
  );
  
  expect(screen.getByText('Count：0')).toBeTruthy();

  expect(screen.getByText("+")).toBeTruthy();
  fireEvent.click(screen.getByText("+"));
  expect(screen.getByText('Count：1')).toBeTruthy();

  expect(screen.getByText("-")).toBeTruthy();
  fireEvent.click(screen.getByText("-"));
  expect(screen.getByText('Count：0')).toBeTruthy();
});
