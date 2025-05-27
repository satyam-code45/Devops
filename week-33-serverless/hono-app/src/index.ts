import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'


const app = new Hono()


app.get('/', (c) => {
  return c.json({
    message: "Hello from Satyam"
  })
})

app.post('/api/v1/sign-up',async (c) => {

  const prismaClient = new PrismaClient({
    //@ts-ignore
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())


  const body = await c.req.json()
  const user = await prismaClient.user.create({
    data:{
      name: body.name,
      email: body.email,
      password: body.password
    }
  })

  return c.json({
    user
  })
})

app.post('/api/v1/sign-in', (c) => {
  return c.json({
    message: "User is Satyam"
  })
})

app.post('/api/v1/todo', (c) => {
  return c.json({
    message: "User is Satyam"
  })
})

export default app
