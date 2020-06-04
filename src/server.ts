import express, { Request, Response } from 'express'

import { host, port } from './configs/server'

const server = express();

server.get("/", (req: Request, res: Response) => res.send({ ok: true }));

server.listen(port, () => console.log(`Listen on ${host}:${port}`));
