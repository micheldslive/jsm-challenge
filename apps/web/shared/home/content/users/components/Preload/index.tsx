import { PropsWithChildren } from "react"
import { Card } from "../Card"

interface PreloadProps extends PropsWithChildren {
  loading?: boolean
}

export const Preload = ({ loading, children }: PreloadProps) => {
  const fakeData = Array.from({ length: 9 })

  if (loading) {
    return (
      <>
        {fakeData.map((_, index) => (
          <Card
            key={index}
            title='Fake title'
            address='Fake address'
            country='Fake country'
            loading={loading}
          />
        ))}
      </>
    )
  }

  return <>{children}</>
}
