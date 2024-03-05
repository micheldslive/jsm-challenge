import { PropsWithChildren } from "react"

interface CheckboxSkeletonProps extends PropsWithChildren {
  length: number
  isLoading?: boolean
}

export const Preloader = ({
  length,
  isLoading,
  children,
}: CheckboxSkeletonProps) => {
  const counts = Array.from({ length })

  if (isLoading) {
    return (
      <>
        <div className='animate-skeleton flex gap-5 flex-col'>
          {counts.map((_, index) => (
            <span
              key={index.toString()}
              className='block text-center w-[80%] h-6 rounded-full bg-neutral-300 text-transparent'
            ></span>
          ))}
        </div>
      </>
    )
  }

  return <>{children}</>
}
