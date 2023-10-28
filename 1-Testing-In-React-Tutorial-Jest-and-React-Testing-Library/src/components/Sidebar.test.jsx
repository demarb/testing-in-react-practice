import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"; //fn's like toBeInTheDocument
import Sidebar from "./Sidebar";

test('renders a name', () => {

    const items = [
        {
            name: "test",
            href: "/test"
        },
    ]

    render(<Sidebar items={items} />);
    // const anchorElements = screen.getAllByRole("navigation")

    const anchorElements = screen.getAllByRole("navigation");
    expect(anchorElements).toHaveLength(1);

    // expect(anchorElements).toBeInTheDocument();
    expect(anchorElements[0]).toHaveTextContent(items[0].name);
    expect(anchorElements[0]).toHaveAttribute("href", "/test")
    
})