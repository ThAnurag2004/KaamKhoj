import React from 'react'
import ContactDetails from './ContactDetails'
import SocialMediaCard from './SocialMediaCard'

function Footer() {
  return (
    <>
    {/* Top section with responsive visibility */}
    
    {/* Make cards stack on mobile and adjust width */}
    <div className='py-2 flex flex-col md:flex-row gap-4 md:gap-6 align-top justify-between items-center mb-2'>
        <div className='w-full md:w-1/4 p-4 md:p-6 rounded-lg'>
        <h1 className='text-2xl md:text-3xl font-bold mb-6'>Other Links</h1>
            <p className='text-sm md:text-base text-justify leading-relaxed font-bold'>
                <a href="http://" target="_blank" >About Us</a><br />
                <a href="http://" target="_blank">View Jobs</a><br />
                <a href="http://" target="_blank">Post Job</a><br />
                <a href="http://" target="_blank">Carrers</a><br />
                <a href="http://" target="_blank">About CEO</a><br />
                <a href="http://" target="_blank">Blog</a><br />
            </p>
        </div>
        <div className='w-full md:w-1/4 md:p-6 rounded-lg'>
            <ContactDetails />
        </div>
        <div className='w-full md:w-1/4 flex flex-col items-center gap-4'>
            <div className='w-full'>
                <SocialMediaCard />
            </div>
        </div>
    </div>
    {/* Adjust bottom section padding and text size */}
    <div className='w-full text-white mt-3 md:mt-5 border-t border-white px-4 md:px-0'>
        <h1 className='text-xl md:text-2xl font-bold mt-4 text-center lg:text-center md:text-left'>made with 🧡 by KaaryaKhoj</h1>
    </div>
    </>
  )
}

export default Footer
