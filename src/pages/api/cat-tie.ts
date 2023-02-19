import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export async function getCatWithTie() {
    return await fetch('https://api.thecatapi.com/v1/images/search?limit=1&size=medium&page=0&category_ids=7').then(response => response.json()).then(data => data[0].url)
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  getCatWithTie().then(url => res.redirect(url))
}
