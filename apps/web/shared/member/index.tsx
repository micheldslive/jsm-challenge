"use client"

import { useJSMContext } from "~/core/context"
import { Container } from "../container"
import { StringParam, useQueryParam, withDefault } from "use-query-params"
import { User } from "./user"

export const Member = () => {
  const { getUserByName } = useJSMContext()
  const [name] = useQueryParam("name", withDefault(StringParam, ""))
  const { data: user, isLoading } = getUserByName({ name })

  return (
    <Container className='pb-6 pt-4 flex items-center justify-center'>
      <div className='w-full flex items-center justify-center min-h-[50vh]'>
        <User user={user} loading={isLoading} />
      </div>
    </Container>
  )
}
