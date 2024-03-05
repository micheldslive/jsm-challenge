/* eslint-disable no-unused-vars */
import { createStore, useStore } from "zustand"
import { ParamsProps } from "."

interface States {
  itemsCount: ParamsProps
  currentPage: ParamsProps
  maxPerPage: ParamsProps
}

interface Actions {
  setPaginateParams(params: States): void
}

export const paginateParamsStore = createStore<States & Actions>()((set) => ({
  itemsCount: 0,
  maxPerPage: 9,
  currentPage: 1,
  setPaginateParams: (params) => {
    set(() => ({ ...params }))
  },
}))

export const usePaginateParamsStore = () => useStore(paginateParamsStore)
