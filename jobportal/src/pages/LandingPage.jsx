import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import { Link } from 'react-router-dom'
import companies from '../data/companies.json'
import Autoplay from 'embla-carousel-autoplay'

function LandingPage() {
  return (
    <main className="flex flex-col gap-10 justify-center sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job <span>and get Hired</span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        <Link to="/Job">
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to="/PostJob">
          <Button variant="destructive" size="xl">
            Post Jobs
          </Button>
        </Link>
      </div>

      {/* carousel */}

      <Carousel
        plugins={[Autoplay({ delay: 1000 })]}
        className="w-full py-10 m-2"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => {
            return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                <img
                  src={path}
                  alt={name}
                  className="h-9 sm:h-14 object-contain"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* banner */}

      <img src="/banner.jpeg" className="w-full sm:max-w-full p-6 rounded-xl" />

      <section className='grid grid-cols-1 md:grid-cols-2 gap-4 p-2'>
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Search and apply for jobs, track applications, and more.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Post Jobs, manage applications, and find the best candidates.</p>
          </CardContent>
        </Card>
      </section>

      {/* accordion */}
    </main>
  );
}

export default LandingPage
