import cookie from '@fastify/cookie'
import fastify from 'fastify'
import { pollRoutes } from './routes/poll'

const app = fastify()

app.register(pollRoutes)
app.register(cookie, {
  secret: 'node-poll-nlw',
  hook: 'onRequest',
})

app.listen({ port: 3000 }).then((address) => console.log(address))
