import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom"; //fn's like toBeInTheDocument
import CounterTwo from './CounterTwo';


test('count increases by one on click', ()=>{
  render(<CounterTwo />)
  const divElement = screen.getByRole("contentinfo")
  const buttonElement = screen.getByText("Add One")
  fireEvent.click(buttonElement)
  expect(divElement).toHaveTextContent("Count is 1")
})