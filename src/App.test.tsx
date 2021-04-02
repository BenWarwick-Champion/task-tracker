import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('title and new task form toggle button visible', () => {
  render(<App />);
  const buttonElement = screen.getByText(/add/i);
  const h1Element = screen.getByText(/task tracker/i);
  expect(buttonElement).toBeInTheDocument();
  expect(h1Element).toBeInTheDocument();
});

test('add new task form toggles', () => {
  render(<App />);
  // Check the button exists and displays 'Add'
  const formToggleButton = screen.getByRole('button');
  expect(formToggleButton).toHaveTextContent('Add');

  // Click the toggle
  userEvent.click(screen.getByRole('button'));

  // Check the form fields are visible
  const addDateAndTime = screen.getByText(/day and time/i);
  const setReminder = screen.getByText(/set reminder/i);
  expect(addDateAndTime).toBeInTheDocument();
  expect(setReminder).toBeInTheDocument();

  // Assert the toggle button text updated
  expect(formToggleButton).toHaveTextContent('Close');
});
