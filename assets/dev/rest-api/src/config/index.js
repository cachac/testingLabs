import dotEnv from 'dotenv'
import fs from 'fs'

const json = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const APP_VERSION = json.version

dotEnv.config()

const { APP_ENV } = process.env
const { NODE_PORT, APP_NAME, NODE_ENV } = JSON.parse(APP_ENV)

console.log('Env vars (con proposito de pruebas) ', JSON.parse(APP_ENV))

export default {
  NODE_PORT,
  APP_NAME,
  NODE_ENV,
  APP_VERSION
}
