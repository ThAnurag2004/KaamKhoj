import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react'
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react';

function Header() {
  
  const [ showSignIn, setShowSignIn] = useState(false);

  const[search, setSearch]=useSearchParams();

  useEffect(() =>{
    if (search.get("sign-in")){
      setShowSignIn(true);
    }
  }, [search]);

  const handelOverlayClick=(e) =>{
    if(e.target === e.currentTarget){
      setShowSignIn(false);
      setSearch({});
    }
  }

  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.svg" className="h-15" alt="kk logo" />
        </Link>
        <div className='flex gap-8'>
          <SignedOut>
            <Button variant="outline" onClick={()=>setShowSignIn(true)}>Login</Button>
          </SignedOut>
           
          <SignedIn>
            {/* add a condition here */}
            <Link to="/PostJob">
              <Button variant="destructive" className="rounded-full">
                <PenBox size={20} className='rounded-full' />
                Post a Job
              </Button>
            </Link>
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10"
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label='My Jobs'
                  labelIcon = {<BriefcaseBusiness size={15}/>}
                  href='/MyJobs'
                />
                <UserButton.Link
                  label='Saved Jobs'
                  labelIcon = {<Heart size={15}/>}
                  href='/SavedJobs'
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>

      {showSignIn && <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50' onClick={handelOverlayClick}>
        <SignIn 
          signUpForceRedirectUrl='/Onboarding' 
          fallbackRedirectUrl='/Onboarding' 
        />
      </div> }
    </>
  );
}

export default Header
