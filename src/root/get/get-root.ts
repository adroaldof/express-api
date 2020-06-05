import { Request, Response } from 'express'

export const getRoot = (req: Request, res: Response) => res.send({ ok: true, now: new Date() })
