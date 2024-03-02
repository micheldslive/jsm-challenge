/* eslint-disable no-unused-vars */
import { NextApiRequest, NextApiResponse } from "next"
import { z } from "zod"
import { userSchema, usersSchema, statesSchema, orderSchema } from "../schemas"

export type UserModel = z.infer<typeof userSchema>
export type UsersModel = z.infer<typeof usersSchema>
export type ResultsModel = { results: z.infer<typeof usersSchema> }
export type StatesModel = z.infer<typeof statesSchema>
export type OrderModel = keyof z.infer<typeof orderSchema>

export interface UsersQueryProps {
  maxPerPage: number
  currentPage: number
  data: UsersModel
  totalPages: number
}

export interface GetParams<T> {
  (req: NextApiRequest, res: NextApiResponse): Promise<T | void>
}

export type QUeryParams = {
  order?: OrderModel
} & NextApiRequest["query"]

interface Test {
  test: keyof QUeryParams["order"]
}

export interface UsersModelProps {
  getAllUsers: GetParams<UsersModel>
  getUsersQuery: GetParams<UsersQueryProps>
  getStatesList: GetParams<string[]>
}