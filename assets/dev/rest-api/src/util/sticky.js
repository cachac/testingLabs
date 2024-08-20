import crypto from 'crypto'
const num = crypto.randomUUID().slice(0, 3)

export const sticky = num
