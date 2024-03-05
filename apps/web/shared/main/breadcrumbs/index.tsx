"use client"

import React, { ReactNode } from "react"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { locales } from "~/mocks"
import { useTranslation } from "react-i18next"

type TBreadCrumbProps = {
  homeElement: ReactNode
  separator: ReactNode
  containerClasses?: string
  listClasses?: string
  activeClasses?: string
  capitalizeLinks?: boolean
}

export const Breadcrumbs = ({ homeElement, separator }: TBreadCrumbProps) => {
  const localesString: string[] = [...locales]
  const paths = usePathname()
  const { t } = useTranslation()
  const pathNames = paths
    ?.split("/")
    .filter((path) => !localesString.includes(path))

  const detailsLng = {
    details: "main.breadcrumbs.details",
  }

  return (
    <ul className='flex items-center gap-1 text-xs'>
      <li>
        <Link href={"/"}>{homeElement}</Link>
      </li>
      {pathNames?.map((link, index) => {
        if (link === "") return null

        let href = `/${pathNames.slice(0, index + 1).join("/")}`
        const details = detailsLng[link as never]

        return (
          <React.Fragment key={index.toString()}>
            <li>{separator}</li>
            <li>
              <Link href={href}>{details ? t(details) : link}</Link>
            </li>
            {pathNames.length !== index + 1 && <li>{separator}</li>}
          </React.Fragment>
        )
      })}
    </ul>
  )
}
