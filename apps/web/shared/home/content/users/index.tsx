import { useJSMContext } from "~/core/context"
import { Card } from "./components/Card/"
import { Pagination } from "@jsm/ui"
import Image from "next/image"
import { usePaginateParamsStore, useParamsStore } from "~/core/storage"
import { useEffect, useState } from "react"
import { Preload } from "./components/Preload"
import Link from "next/link"
import { startCase } from "lodash"
import { ItemNotFound } from "~/shared/not-found"

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
        currentCount: data.items.length,
        maxPerPage: 9,
      })
    }
  }, [data])

  return (
    <>
      <div className='grid rsm:!grid-cols-1 rmd:grid-cols-2 grid-cols-3 gap-4'>
        <Preload loading={isLoading}>
          {data?.items?.map((item, index) => {
            const fullName = startCase(`${item?.name.first} ${item?.name.last}`)
            return (
              <Link href={`/details?name=${fullName}`}>
                <Card
                  key={item?.name.first + index}
                  image={() => (
                    <Image
                      src={item?.picture.medium}
                      alt={fullName}
                      width={80}
                      height={80}
                    />
                  )}
                  title={fullName}
                  address={startCase(`${item?.location.street}`)}
                  country={startCase(
                    `${item?.location.city} ${item?.location.state} CEP-${item?.location.postcode}`,
                  )}
                  loading={isLoading}
                />
              </Link>
            )
          })}
        </Preload>
      </div>
      {Boolean(data?.items?.length === 0) && (
        <ItemNotFound className='w-full max-w-full' />
      )}
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
