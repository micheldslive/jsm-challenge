import { UsersService } from "../services"
import { UsersRepository } from "../repositories"
import NodeCache from "node-cache"
import { NextApiRequest, NextApiResponse } from "next"

const cache = new NodeCache()

export class UsersController {
  static usersService = new UsersService(new UsersRepository(cache))

  static async getAllUsers(req: NextApiRequest, res: NextApiResponse) {
    return await this.usersService.getAllUsers(req, res)
  }
  static async getUsersQuery(req: NextApiRequest, res: NextApiResponse) {
    return await this.usersService.getUsersQuery(req, res)
  }

  static async getStatesList(req: NextApiRequest, res: NextApiResponse) {
    return await this.usersService.getStatesList(req, res)
  }
}
