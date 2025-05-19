import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

function Header() {
  return (
    <>
      <nav className='py-4 flex justify-between items-center'>
        <Link>
          <h1 className='text-3xl p-4'>कामखोज</h1>
        </Link>
        {/* <Button variant="outline">Login</Button> */}

          <SignedOut>
          <SignInButton />
          </SignedOut>
          <SignedIn>
          <UserButton />
          </SignedIn>

      </nav>
    </>
  )
}

export default Header
