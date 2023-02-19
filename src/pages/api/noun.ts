import type { NextApiRequest, NextApiResponse } from 'next'
import { nouns } from './nouns'

type Data = {
    query: string[]
}

const startsWith = (text: string) => (v: string) => v.startsWith(text)

export function getNouns(textToStartWith: string) {
  return nouns.filter(startsWith(textToStartWith))
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({query: getNouns(req.query['startsWith']?.toString() ?? '')})
}
