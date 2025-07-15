import { Hono } from 'hono'
import { userRouter } from './api/routes/userRouter'
import { adminRouter } from './api/routes/adminRouter'
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings : {
    DATABASE_URL : string,
    JWT_SECRET : string
  }
}>()

app.use(cors());
app.route("api/v1/user", userRouter);
app.route("api/v1/admin", adminRouter);

export default app
