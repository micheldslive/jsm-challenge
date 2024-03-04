import { Logo } from "@jsm/ui"
import Link from "next/link"

export const JSMLogo = () => {
  return (
    <Link href='/' className='w-fit'>
      <Logo size='md' color='transparent' className='w-full fill-white' />
    </Link>
  )
}
