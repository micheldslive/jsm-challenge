import axios from "axios"

export const HTTPClient = <T>() => {
  const baseURL = process.env.JSM_PUBLIC_API_URL ?? ""

  if (!baseURL) {
    throw new Error("baseURL not found")
  }

  const instance = axios.create({
    baseURL,
  })

  return instance<T>
}
