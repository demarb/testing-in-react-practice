import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom"; //fn's like toBeInTheDocument
import APIComponent from './APIComponent';
//Mocking Service Worker
import { rest } from 'msw'
import { setupServer } from 'msw/node'


const server = setupServer(
  rest.get("https://www.fakeapicall.com/api", (req, res, ctx) => {
    return res(ctx.json({name: "Jack"}))
  })
)

beforeAll(()=>server.listen())
afterEach(()=>server.resetHandlers())
afterAll(()=>server.close())

test('gets the data', async ()=>{
  render(<APIComponent />)
  const out = await waitFor(()=> screen.getByRole("contentinfo"))
  // expect(out).toHaveTextContent("Name is Ja") // This test will pass even though the content is "Name is Jack"
  expect(out).toHaveTextContent("Name is Jack")

  // const divElement = screen.getByRole("contentinfo")
  // const buttonElement = screen.getByText("Add One")
  // fireEvent.click(buttonElement)
  // expect(divElement).toHaveTextContent("Count is 1")
})