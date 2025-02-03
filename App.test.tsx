import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />); // 直接渲染 <App />，不需要再包裹 <Router>
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});