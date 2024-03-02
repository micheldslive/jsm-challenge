import { HTTPResponse } from "../http"
import { statesSchema } from "../schemas"
import {
  QUeryParams,
  ResultsModel,
  UsersModel,
  UsersModelProps,
} from "../models"
import NodeCache from "node-cache"
import { getOptions, paginate, startCase } from "../utils"
import { NextApiRequest, NextApiResponse } from "next"
import { matchSorter } from "match-sorter"
import { HTTPClient } from "../http/HTTPClient"

const api = HTTPClient()

export class UsersRepository implements UsersModelProps {
  private cache: NodeCache

  constructor(cache: NodeCache) {
    this.cache = cache
  }

  async getAllUsers(_: NextApiRequest, res: NextApiResponse) {
    try {
      const chachedUsers = this.cache.get<UsersModel>("users")

      if (chachedUsers !== undefined) {
        this.cache.set("users", chachedUsers, 3600)
        return chachedUsers
      }

      const users = await api.get<ResultsModel>("")

      if (!users.data) {
        return HTTPResponse.error(res, {
          code: "NOT_FOUND",
          message: "Ops... dados não encontrados.",
        })
      }

      const results = users.data.results
      this.cache.set("users", results, 3600)

      return results
    } catch {
      return HTTPResponse.error(res, {
        code: "INTERNAL_SERVER_ERROR",
        message: "Erro ao obter usuários.",
      })
    }
  }

  async getUsersQuery(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { currentPage, maxPerPage, search, order, states }: QUeryParams =
        req.query

      const allUsers = await this.getAllUsers(req, res)

      if (!allUsers) {
        return HTTPResponse.error(res, {
          code: "NOT_FOUND",
          message: "Ops... dados não encontrados.",
        })
      }

      const matchUsers = matchSorter(allUsers, String(search ?? ""), {
        ...getOptions(order),
      })

      const users = states
        ? matchUsers.filter((item) => states.includes(item.location.state))
        : matchUsers

      const response = paginate({ users, currentPage, maxPerPage })

      return HTTPResponse.ok(res, response)
    } catch {
      return HTTPResponse.error(res, {
        code: "INTERNAL_SERVER_ERROR",
        message: "Erro ao obter usuários.",
      })
    }
  }

  async getStatesList(req: NextApiRequest, res: NextApiResponse) {
    try {
      const users = await this.getAllUsers(req, res)

      const states = [
        ...new Set(users?.map((user) => startCase(user.location.state))),
      ]

      if (!states.length) {
        return HTTPResponse.error(res, {
          code: "NOT_FOUND",
          message: "Ops... nenhum estado listado.",
        })
      }

      return HTTPResponse.validate(states, statesSchema, res)
    } catch {
      return HTTPResponse.error(res, {
        code: "INTERNAL_SERVER_ERROR",
        message: "Erro ao obter usuários.",
      })
    }
  }
}
