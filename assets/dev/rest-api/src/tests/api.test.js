import supertest from 'supertest'
import { server } from '../main.js'

const api = supertest(server)

test('healthcheck', async () => {
  const res = await api.get('/healthcheck').send()
  expect(res.statusCode).toEqual(200)
})

test('delay', async () => {
  const res = await api.get('/delay?seconds=3').send()
  expect(res.statusCode).toEqual(200)
})

// TODO: descomentar para forzar el error:
// test('error400', async () => {
//   const res = await api.get('/error400').send()
//   expect(res.statusCode).toEqual(200)
// })

afterAll((done) => {
  server.close()
  done()
})
