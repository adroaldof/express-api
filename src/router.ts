import { Router } from 'express'
import { Express } from 'express-serve-static-core'

import { rootRouter } from './root'

const router = Router()

router.use('/', rootRouter)

export const loadRoutes = (server: Express) => {
  server.use('/api', router)
}
