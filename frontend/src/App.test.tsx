import { waitFor, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { mockServer, rest } from "./setupMockServer"

import App from "./App"

test("renders App", () => {
  render(<App />)
  expect(screen.getByTestId("app")).toBeInTheDocument()
})

//test("renders error page, when server responds with an error", async () => {
  //// "use" overrides endpoint logic
  //mockServer.use(
    //rest.get("http://127.0.0.1:8000/", (req, res, ctx) => {
      //return res(ctx.status(404))
    //})
  //)
  //render(<App />)
  //// use waitFor to let the loading state change
  //await waitFor(() => {
    //expect(screen.getByTestId("error")).toBeInTheDocument()
  //})
//})