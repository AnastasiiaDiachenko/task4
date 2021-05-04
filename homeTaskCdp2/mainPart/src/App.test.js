import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  })
  
  it('should renders Find your movie text', () => {
    const linkElement = screen.getByText(/Find your movie/i);
    expect(linkElement).toBeInTheDocument();
  })

  it('should renders Search text', () => {
    const linkElement = screen.getByText(/Search/i);
    expect(linkElement).toBeInTheDocument();
  })
})
