import { renderHook, act } from "@testing-library/react";
import useAPI from "./useAPI";
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


test("should increment",  async ()=>{
    const { result, waitForNextUpdate } = renderHook(()=>useAPI());

    // await  waitForNextUpdate();

    expect(result.current).toEqual({name: "Matt"})
})