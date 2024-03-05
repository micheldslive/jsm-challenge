import { NextApiRequest, NextApiResponse } from "next"
import NextCors from "nextjs-cors"
import { UsersController } from "@jsm/backend"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await NextCors(req, res, {
    // Options
    methods: ["GET"],
    optionsSuccessStatus: 200,
  })

  return await UsersController.getUsersQuery(req, res)
}
