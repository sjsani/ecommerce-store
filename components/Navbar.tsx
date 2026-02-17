import React from 'react'
import Link from 'next/link'
import MainNav from './MainNav'
import GetCategories from '@/actions/GetCategories'
import NavbarActions from './NavbarActions'

export const revalidate = 0

const Navbar = async () => {
  const categories = await GetCategories()

  return (
    <div className="border-b">
      <div className="flex h-16 items-center justify-between px-6 lg:px-10 w-full">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-x-8">
          <Link href="/" className="font-bold text-xl">
            STORE
          </Link>

          <MainNav data={categories} />
        </div>

        {/* RIGHT SIDE */}
        <NavbarActions />

      </div>
    </div>
  )
}

export default Navbar
