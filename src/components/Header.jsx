import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
    <main>
    <div className='logo'>Logo</div>
    <ul>
        <li>
        <Link href="/">
        Home
        </Link>
        </li>
        <li>
         <Link href="/about">
        About
        </Link>
        </li>
         <li>
         <Link href="/course">
        Course
        </Link>
        </li>
         <li>
         <Link href="/course">
        Contact
        </Link>
        </li>
    </ul>
      </main>
    </header>
  )
}
