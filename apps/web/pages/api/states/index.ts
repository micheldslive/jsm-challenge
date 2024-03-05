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
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  return await UsersController.getStatesList(req, res)
}
