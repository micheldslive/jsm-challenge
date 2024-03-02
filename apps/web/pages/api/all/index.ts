import { NextApiRequest, NextApiResponse } from "next"
import { UsersController } from "@jsm/backend"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await UsersController.getAllUsers(req, res)

  if (response) {
    return res.status(200).json(response)
  }
}
