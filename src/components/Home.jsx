import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home'className='bg-[#0a192f] w-full h-screen'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>
          Hi my name is
        </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Rodrigo Roa
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-gray-800'>
          i'm a Full Stack Developer
        </h2>
        <p className='text-gray-800 py-4 max-w-[700px]'>
          i'm a fullstack developer with 1 year of experience, interesting in introducting me in a IT world !
        </p>
        <div>
          <Link to='projects' smooth duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                View Projects   
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-2'/>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home