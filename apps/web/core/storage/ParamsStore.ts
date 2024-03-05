/* eslint-disable no-unused-vars */
import { createStore, useStore } from "zustand"

type ParamsProps = number | string | string[]
type PaginationProps = Record<string, ParamsProps>

interface States {
  search?: string
  states?: string[]
  order?: string
  pagination?: PaginationProps
}

interface Actions {
  setParams(params: States): void
}

const createParamsStore = createStore<States & Actions>()((set) => ({
  pagination: {
    currentPage: 1,
    maxPerPage: 9,
    totalPages: 0,
  },
  search: "",
  states: [],
  order: "",
  setParams: (params) => {
    set(() => ({ ...params }))
  },
}))

export const useParamsStore = () => useStore(createParamsStore)
