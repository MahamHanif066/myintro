import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
        <Link href="/"> Home </Link>
        <Link href="/about"> About us </Link>
        <Link href="/contact"> Contact us </Link>
    </div>
  )
}

export default Navbar