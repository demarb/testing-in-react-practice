import React from "react";
import ZustandCounter from "./ZustandCounter";
import { render, screen, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import { useStore } from "./zustandStore";

const originalState = useStore.getState();


test("Add one", ()=>{
    render(<ZustandCounter />)

    const counter = screen.getByRole("contentinfo")
    expect(counter).toHaveTextContent("0");

    const addButton = screen.getByText("Increment");
    fireEvent.click(addButton)

    expect(counter).toHaveTextContent("1");
} )


beforeEach(()=>{
    useStore.setState(originalState)
})
test("Add one again", ()=>{
    render(<ZustandCounter />)

    const counter = screen.getByRole("contentinfo")
    expect(counter).toHaveTextContent("0");

    const addButton = screen.getByText("Increment");
    fireEvent.click(addButton)

    expect(counter).toHaveTextContent("1");
} )


// test("Add one a third time but reset from 0", ()=>{
//     render(<ZustandCounter />)

//     const counter = screen.getByRole("contentinfo")
//     expect(counter).toHaveTextContent("0");

//     const addButton = screen.getByText("Increment");
//     fireEvent.click(addButton)

//     expect(counter).toHaveTextContent("1");
// } )