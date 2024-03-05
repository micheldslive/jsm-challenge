/* eslint-disable no-unused-vars */
import { NextApiRequest, NextApiResponse } from "next"
import { UsersModelProps } from "../models"

export class UsersService implements UsersModelProps {
  constructor(private readonly usersRepository: UsersModelProps) {}

  public async getAllUsers(req: NextApiRequest, res: NextApiResponse) {
    return await this.usersRepository.getAllUsers(req, res)
  }
  public async getUsersQuery(req: NextApiRequest, res: NextApiResponse) {
    return await this.usersRepository.getUsersQuery(req, res)
  }
  public async getUserByName(req: NextApiRequest, res: NextApiResponse) {
    return await this.usersRepository.getUserByName(req, res)
  }

  public async getStatesList(req: NextApiRequest, res: NextApiResponse) {
    return await this.usersRepository.getStatesList(req, res)
  }
}
