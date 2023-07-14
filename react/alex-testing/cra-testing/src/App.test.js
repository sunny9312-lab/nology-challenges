import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  expect(true).toBe(true);
  expect(1 + 1).toBe(2);
});
