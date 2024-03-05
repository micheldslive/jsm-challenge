/* eslint-disable no-unused-vars */
import { createStore, useStore } from "zustand"
import { ArrayParam, StringParam } from "use-query-params"

export type ParamsProps =
  | number
  | string
  | string[]
  | { [x: string]: string }[]
  | (typeof ArrayParam)["default"]
interface States {
  states?: ParamsProps
  search?: (typeof StringParam)["default"]
  order?: (typeof StringParam)["default"]
}

interface Actions {
  setParams(params?: States): void
}

export const paramsStore = createStore<States & Actions>()((set) => ({
  search: "",
  states: [],
  order: "",
  setParams: (params) => {
    set(() => ({ ...params }))
  },
}))

export const useParamsStore = () => useStore(paramsStore)
