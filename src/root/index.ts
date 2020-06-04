import { Request, Response, Router } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => res.send({ ok: true, now: new Date() }))

export const rootRouter = router
