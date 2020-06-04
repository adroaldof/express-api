import express from 'express'

import { host, port } from './configs/server'
import { loadRoutes } from './router'

const server = express()

loadRoutes(server)

server.listen(port, () => console.log(`Listen on ${host}:${port}`))
