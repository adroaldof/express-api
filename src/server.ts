import bodyParser from 'body-parser'
import express from 'express'

import { env, host, port } from './configs/server'
import { loadRoutes } from './router'

const server = express()

server.use(bodyParser.json())

loadRoutes(server)

if (env !== 'test') {
  server.listen(port, () => console.log(`Listen on ${host}:${port}`))
}

export { server }
