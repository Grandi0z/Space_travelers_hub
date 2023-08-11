import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; 
import Header from '../Header';

describe('Header', () => {
  it('renders without errors', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  it('renders the logo and links', () => {
    const { getByAltText, getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logo = getByAltText('logo');
    expect(logo).toBeInTheDocument();

    const rocketsLink = getByText('Rockets');
    expect(rocketsLink).toBeInTheDocument();

    const missionsLink = getByText('Missions');
    expect(missionsLink).toBeInTheDocument();

    const myProfileLink = getByText('My Profile');
    expect(myProfileLink).toBeInTheDocument();
  });
});
