import { OK } from 'http-status-codes'
import supertest from 'supertest'

import { server } from '../../server'

describe('root', () => {
  it('answer ok on get root api', async () => {
    expect(true).toBeTruthy()
    const { body } = await supertest(server).get('/api').expect(OK)

    expect(Object.keys(body)).toEqual(['ok', 'now'])
  })
})
