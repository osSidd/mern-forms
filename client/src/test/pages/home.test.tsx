import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import React from "react"
import App from "../../App"

test('home page has an h1 tag', async () => {
    render(<App/>)
    expect(await screen.getByText(/Loading/)).toBeInTheDocument()
})