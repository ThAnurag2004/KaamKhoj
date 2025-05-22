import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div>
        <div className='grid-background'></div>
        <main className="min-h-screen container p-4">
          <Header />
          <Outlet />
        </main>
        <div className='p-10 text-center bg-black mt-10'>
         <Footer />
        </div>
    </div>
  )
}

export default AppLayout
