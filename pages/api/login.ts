// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { login, pass } from './../../credentials/credentials'

export default (req, res) => {
  const email = req.body.email
  const passwordHash = req.body.passwordHash

  if (email === login && passwordHash === pass) {
    res.statusCode = 200

    res.json({
      message: 'Welcome back commander'
    })
  } else {
    res.statusCode = 401

    res.json({
      message: 'You are not authorized.'
    })
  }
}
