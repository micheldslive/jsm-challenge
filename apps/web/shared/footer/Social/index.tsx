import { ComponentProps, ReactNode } from "react"

interface SocialTypes extends Pick<ComponentProps<"a">, "href" | "target"> {
  icon?: ReactNode
}

interface SocialProps {
  social?: SocialTypes[]
}

export const Social = ({ social }: SocialProps) => {
  return (
    <div className='flex items-center justify-center gap-4 pt-2'>
      {social?.map(({ icon, ...rest }, index) => (
        <a
          key={index.toString()}
          {...rest}
          className='h-10 w-10 flex items-center justify-center bg-blue-social rounded-full hover:bg-blue-500 duration-300 transition-colors hover:scale-110'
        >
          {icon}
        </a>
      ))}
    </div>
  )
}
