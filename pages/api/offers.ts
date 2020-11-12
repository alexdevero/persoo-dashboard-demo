// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

import { email, pass, persooOffersEndpoint } from './../../credentials/credentials'

export default async (req, res) => {
  const data = await axios.get(persooOffersEndpoint, { withCredentials: true })

  res.statusCode = 401

  res.json({
    message: 'There will be some offers soon.'
  })
}
