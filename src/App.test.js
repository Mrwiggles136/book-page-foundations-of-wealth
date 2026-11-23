import { render, screen } from '@testing-library/react';
import App from './App';

test('buy buttons link to the checkout', () => {
  render(<App />);
  const buttons = screen.getAllByRole('link', { name: /buy now/i });
  expect(buttons.length).toBeGreaterThan(0);
  buttons.forEach((b) => expect(b).toHaveAttribute('href', expect.stringContaining('paypal.com')));
});
