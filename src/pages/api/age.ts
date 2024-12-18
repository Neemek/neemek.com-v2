import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  age: number
}

export const calcAge = () => Math.floor((Date.now() - new Date(2000, 0).getTime()) / (1000 * 60 * 60 * 24 * 365))

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ age: calcAge() })
}
