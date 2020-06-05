import { Router } from 'express'

import { getRoot } from './get/get-root'

const router = Router()

router.get('/', getRoot)

export const rootRouter = router
