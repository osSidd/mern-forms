import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import React from "react"
import App from '../../App'
import HomePage from "../../pages/home"
import { BrowserRouter, MemoryRouter } from "react-router-dom"

describe('home page', () => {
    
    test('home page text', async () => {
        render(<BrowserRouter><HomePage/></BrowserRouter>)
        expect(await screen.findByRole('heading', {name: 'Get insights quickly, with MERN forms'})).toBeInTheDocument()
        expect(await screen.findByRole('contentinfo')).toHaveTextContent('Easily create and share online forms and surveys, and analyze responses in real-time.')
    })
})

describe('redirects to form builder', () => {
    test('redirect', async () => {
        render(<MemoryRouter><App/></MemoryRouter>)
        const link = await screen.findByRole('link', {name: 'Go to Forms'})
        fireEvent.click(link)
        const link2 = await screen.findByRole('link', {name: 'Questions'})
        expect(await screen.findByPlaceholderText('Form title')).toBeInTheDocument()
    })
})