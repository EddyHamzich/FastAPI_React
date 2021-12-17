import { rest } from "msw"
import { setupServer } from "msw/node"

const mock = {
  "msg": "mock"
}

const mockServer = setupServer(
  // setupServer controls which endpoints get intercepted by our mockServer
  rest.get("http://127.0.0.1:8000/", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mock))
  }),
  // "*" intercepts all endpoints (that originate from a test)
  rest.get("*", (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`)
    return res(
        ctx.status(500),
        ctx.json({ error: "You must add request handler." })
    )
  })
)

beforeAll(() => mockServer.listen())
afterAll(() => mockServer.close())
afterEach(() => mockServer.resetHandlers())

export { mockServer, rest }