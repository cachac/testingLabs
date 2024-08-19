import dotEnv from 'dotenv'

dotEnv.config({
  path: './.env.test'
})

if (process.env.NODE_ENV !== 'test') {
  throw Error('non-testing environment')
}
