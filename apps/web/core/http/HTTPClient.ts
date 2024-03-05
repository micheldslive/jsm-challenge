import axios, { AxiosRequestConfig } from "axios"

export const HTTPClient = async <T>(configs: AxiosRequestConfig) => {
  const baseURL = process.env.JSM_API_BASE_PATH ?? "http://localhost:3000"

  if (!baseURL) {
    throw new Error("baseURL not found")
  }

  const instance = axios.create({
    baseURL,
  })

  return await instance.request<T>({
    ...configs,
  })
}
