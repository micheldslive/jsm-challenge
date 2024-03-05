/* eslint-disable no-unused-vars */
import { NextApiRequest, NextApiResponse } from "next"
import { z } from "zod"
import { userSchema, usersSchema, statesSchema, orderSchema } from "../schemas"
import { paginate } from "../utils"
export type UserModel = z.infer<typeof userSchema>
export type UsersModel = z.infer<typeof usersSchema>
export type ResultsModel = { results: z.infer<typeof usersSchema> }
export type StatesModel = z.infer<typeof statesSchema>
export type OrderModel = keyof z.infer<typeof orderSchema>
export type PaginateModel = ReturnType<typeof paginate<UserModel>>

export interface UsersQueryProps {
  maxPerPage: number
  currentPage: number
  data: UsersModel
  totalPages: number
  itemsCount: number
}

export interface GetParams<T> {
  (req: NextApiRequest, res: NextApiResponse): Promise<T | void>
}

export type QueryParams = {
  order?: OrderModel
} & NextApiRequest["query"]

export interface UsersModelProps {
  getAllUsers: GetParams<UsersModel>
  getUsersQuery: GetParams<UsersQueryProps>
  getStatesList: GetParams<string[]>
}
