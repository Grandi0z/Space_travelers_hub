import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorPage from '../ErrorPage';

jest.mock('react-router', () => ({
  useRouteError: jest.fn(),
}));

describe('ErrorPage', () => {
  it('renders the error message', () => {
    // Mock the behavior of useRouteError
    const errorMock = {
      statusText: 'Not Found',
      message: 'Resource not found',
    };
    require('react-router').useRouteError.mockReturnValue(errorMock);

    const { getByText } = render(<ErrorPage />);

    const errorMessage = getByText(/Not Found/i);
    expect(errorMessage).toBeInTheDocument();

    const unexpectedErrorText = getByText(/Sorry, an unexpected error has occurred./i);
    expect(unexpectedErrorText).toBeInTheDocument();
  });

  it('renders default error message if no error provided', () => {
    // Mock the behavior of useRouteError
    require('react-router').useRouteError.mockReturnValue(null);

    const { getByText } = render(<ErrorPage />);

    const defaultErrorMessage = getByText(/Oops!/i);
    expect(defaultErrorMessage).toBeInTheDocument();
  });
});
