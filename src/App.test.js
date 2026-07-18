import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio hero section', () => {
  render(<App />);
  expect(screen.getByText(/building modern web experiences/i)).toBeInTheDocument();
});
