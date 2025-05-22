import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

function Header() {
  return (
    <>
      <nav className='py-4 flex justify-between items-center'>
        <Link to="/">
          <img src="/logo.svg" className="h-15" alt="kk logo" />
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
