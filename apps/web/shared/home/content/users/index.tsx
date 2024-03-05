import { useJSMContext } from "~/core/context"
import { Card } from "./components/Card/"
import { Pagination } from "@jsm/ui"
import Image from "next/image"
import { usePaginateParamsStore, useParamsStore } from "~/core/storage"
import { useEffect, useState } from "react"
import { Preload } from "./components/Preload"

export const Users = () => {
  const { getQueryUsers } = useJSMContext()
  const { order, states, search } = useParamsStore()
  const { setPaginateParams, currentPage, maxPerPage } =
    usePaginateParamsStore()
  const [totalPages, setTotalPages] = useState<number>(0)
  const { data, isLoading } = getQueryUsers({
    currentPage,
    maxPerPage,
    order,
    states,
    search,
  })
  useEffect(() => {
    if (data) {
      setTotalPages(data.totalPages)
      setPaginateParams({
        itemsCount: data.itemsCount,
        currentPage: data.currentPage,
        maxPerPage: 9,
      })
    }
  }, [data])

  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        <Preload loading={isLoading}>
          {data?.items?.map((item, index) => (
            <Card
              key={item?.name.first + index}
              image={() => (
                <Image
                  src={item?.picture.medium}
                  alt={`${item?.name.first} ${item?.name.last}`}
                  width={80}
                  height={80}
                />
              )}
              title={`${item?.name.first} ${item?.name.last}`}
              address={`${item?.location.street}`}
              country={`${item?.location.street}`}
              loading={isLoading}
            />
          ))}
        </Preload>
      </div>
      <div className='w-full flex justify-center py-4'>
        <Pagination
          total={totalPages}
          initialPage={data?.currentPage}
          page={data?.currentPage}
          onChange={(currentPage) => {
            setPaginateParams({
              currentPage,
              maxPerPage: 9,
              itemsCount: data ? data.itemsCount : 0,
            })
          }}
        />
      </div>
    </>
  )
}
