import { Hono } from 'hono'

const app = new Hono<{
  Bindings : DATABASE_URL
}>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
