import { Logo } from "@jsm/ui"
import Link from "next/link"

export const JSMLogo = () => {
  return (
    <Link href='/' className='w-fit min-w-36'>
      <Logo size='sm' className='w-full' />
    </Link>
  )
}
