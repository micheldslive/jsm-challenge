import { NextApiResponse } from "next"
import { ZodType } from "zod"

export const HTTP_ERROR_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  VALIDATION_ERROR: 402,
  NOT_FOUND: 404,
  UNPROCESSABLE_CONTENT: 422,
  INTERNAL_SERVER_ERROR: 500,
}

type HTTPResponseCode = keyof typeof HTTP_ERROR_CODES

type HTTPResponseProps = {
  message?: string
  code: HTTPResponseCode
}

export class HTTPResponse {
  static error(res: NextApiResponse, { code, message }: HTTPResponseProps) {
    const status = HTTP_ERROR_CODES[code]
    return res.status(status).json({
      code,
      status,
      message,
    })
  }

  static ok<T>(res: NextApiResponse, json: T) {
    return res.status(200).json(json ?? {})
  }

  static validate<D, S extends ZodType<D>>(
    data: D,
    schema: S,
    res: NextApiResponse,
  ) {
    const validation = schema.safeParse(data)
    const { success } = validation

    if (!success) {
      return HTTPResponse.error(res, {
        code: "VALIDATION_ERROR",
        message: "Ops... dados recebidos não batem com o esperado.",
      })
    }

    return HTTPResponse.ok(res, validation.data)
  }
}
