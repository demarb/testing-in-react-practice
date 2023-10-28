import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"; //fn's like toBeInTheDocument
import Person from "./Person";

test('renders a name', () => {
    render(<Person name="Jack" />);
    // const divElement = screen.getByText("Name is : Jack");
    const divElement = screen.getByRole("contentinfo");
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveTextContent("Name is : Jack");
    expect(divElement).toHaveAttribute("role", "contentinfo")
    
})