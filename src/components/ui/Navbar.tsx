import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
  return (
    <div className="bg-white border flex flex-row items-center justify-between">
        <Image src={'/logo.png'} alt="logo" width={120} height={60}/>
        <div className="flex gap-4 items-center">
          <Link href={'/'}>Sign in</Link>
          <Link href={'/'} className="border-[#2d4c2f] rounded-md px-2 py-1 bg-[#aedfb8] text-[#2d4c2f]">Sign up</Link>
        </div>
    </div>
  )
}
