import { MatchSorterOptions } from "match-sorter"
import { OrderModel, UserModel } from "../models"
import { NextApiRequest } from "next"

type NextRecord = NextApiRequest["query"]["x"]

type Paginate<T> = {
  users: T[]
  currentPage: NextRecord
  maxPerPage: NextRecord
}

export function paginate<T>({ users, currentPage, maxPerPage }: Paginate<T>) {
  const params = {
    currentPage: Number(currentPage ?? 1),
    maxPerPage: Number(maxPerPage ?? 9),
  }
  const itemsCount = users.length
  const totalPages = Math.ceil(itemsCount / params.maxPerPage)
  const startIndex = (params.currentPage - 1) * params.maxPerPage
  const endIndex = startIndex + params.maxPerPage
  const items = users.slice(startIndex, endIndex)

  return {
    currentPage: totalPages < params.currentPage ? 1 : params.currentPage,
    maxPerPage: params.maxPerPage,
    totalPages,
    itemsCount,
    items,
  }
}

export const startCase = (text?: string) =>
  text?.replace(
    /\b(?!d[oe]\b)\p{L}+/giu,
    (match) => match.charAt(0).toUpperCase() + match.slice(1),
  ) ?? ""

//Function to set search and sort options
export const getOptions = (
  order?: OrderModel,
): MatchSorterOptions<UserModel> => ({
  keys: [(item) => `${item.name.first} ${item.name.last}`],
  baseSort: ({ item: A }, { item: B }) => {
    if (order === "date") {
      return (
        new Date(B.registered.date).getTime() -
        new Date(A.registered.date).getTime()
      )
    } else {
      return A.name[order ?? "first"].localeCompare(B.name[order ?? "first"])
    }
  },
})
