import { z } from "zod"

const nameSubSchema = z.object({ first: z.string(), last: z.string() })
const dateSubSchema = z.object({ date: z.string() })

export const orderSchema = nameSubSchema.merge(dateSubSchema)

export const userSchema = z.object({
  gender: z.string(),
  name: z
    .object({
      title: z.string(),
    })
    .merge(nameSubSchema),
  location: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    postcode: z.number(),
    coordinates: z.object({
      latitude: z.string(),
      longitude: z.string(),
    }),
    timezone: z.object({
      offset: z.string(),
      description: z.string(),
    }),
  }),
  email: z.string(),
  dob: z
    .object({
      age: z.number(),
    })
    .merge(dateSubSchema),
  registered: z
    .object({
      age: z.number(),
    })
    .merge(dateSubSchema),
  phone: z.string(),
  cell: z.string(),
  picture: z.object({
    large: z.string(),
    medium: z.string(),
    thumbnail: z.string(),
  }),
})

export const usersSchema = z.array(userSchema)

export const statesSchema = z.array(z.string())
