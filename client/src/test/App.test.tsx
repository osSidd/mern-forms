import React from 'react';
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

test('render the main page', async () => {
    render(<BrowserRouter><App/></BrowserRouter>)
    expect(await screen.findByText(/Loading/)).toBeInTheDocument()
})