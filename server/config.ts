import 'dotenv/config'

export default {
  jwtSecret: process.env.VITE_JWT_SECRET || ''
}