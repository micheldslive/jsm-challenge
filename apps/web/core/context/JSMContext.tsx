/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react"
import { useQuery, type UseQueryResult } from "@tanstack/react-query"
import { HTTPClient } from "~/core/http"
import { AxiosRequestConfig } from "axios"
import { PaginateModel, UserModel, StatesModel, UsersModel } from "@jsm/backend"
import { ParamsProps } from "../storage"

export interface HandleQueryProps {
  key: string
  value?: string
}

type GetProps<T, R> = (props: Record<string, T>) => UseQueryResult<R, Error>

type GetQueryUsersProps = GetProps<ParamsProps, PaginateModel>
type GetUserProps = GetProps<string, UserModel>
type GetStatesProps = GetProps<
  string,
  {
    states: StatesModel
  }
>

interface JSMContextProps {
  getQueryUsers: GetQueryUsersProps
  getUserByName: GetUserProps
  getStates: GetStatesProps
}

const JSMContext = createContext<JSMContextProps | undefined>(undefined)

export const JSMContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const queryName = {
    users: "jsm-get-users",
    user: "jsm-get-user",
    states: "jsm-get-states",
  }

  const httpRequest = async <T extends object>(
    configs: AxiosRequestConfig,
  ): Promise<T> => {
    const response = await HTTPClient<T>({
      method: "GET",
      ...configs,
    })

    return response.data
  }

  const getQueryUsers: GetQueryUsersProps = ({
    currentPage,
    maxPerPage,
    search,
    order,
    states,
  }) => {
    return useQuery({
      queryKey: [
        queryName.users,
        currentPage,
        maxPerPage,
        search,
        order,
        states,
      ],
      queryFn: async ({
        queryKey: [, currentPage, maxPerPage, search, order, states],
      }) =>
        await httpRequest<PaginateModel>({
          method: "GET",
          url: "/api/users-query",
          params: {
            currentPage,
            maxPerPage,
            search,
            order,
            states,
          },
        }),
      refetchOnWindowFocus: false,
    })
  }

  const getUserByName: GetUserProps = ({ name }) => {
    return useQuery({
      queryKey: [queryName.user, name],
      queryFn: async ({ queryKey: [, name] }) => {
        try {
          return await httpRequest<UserModel>({
            method: "GET",
            url: "/api/user",
            params: {
              name,
            },
          })
        } catch (errors) {
          console.error(errors)
        }
      },
      refetchOnWindowFocus: true,
    })
  }

  const getStates: GetStatesProps = ({ reload }) => {
    return useQuery({
      queryKey: [queryName.states, reload],
      queryFn: async ({ queryKey: [, reload] }) => {
        try {
          return await httpRequest<{
            states: StatesModel
          }>({
            method: "GET",
            url: "/api/states",
            params: {
              reload,
            },
          })
        } catch (errors) {
          console.error(errors)
        }
      },
      refetchOnWindowFocus: true,
    })
  }

  return (
    <JSMContext.Provider
      value={{
        getQueryUsers,
        getUserByName,
        getStates,
      }}
    >
      {children}
    </JSMContext.Provider>
  )
}

export const useJSMContext = () => {
  const context = useContext(JSMContext)

  if (!context) {
    throw new Error("useJSMContext deve ser utilizado dentro do JSMProvider")
  }

  return context
}
