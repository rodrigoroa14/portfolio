import React from 'react'
import HTMLlogo from '../assets/logos/html.png'
import CSSlogo from '../assets/logos/css.png'
import JSlogo from '../assets/logos/javascript.png'
import ReactLogo from '../assets/logos/react.png'
import NodeLogo from '../assets/logos/node.png'



const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>
          {/* Container logos */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
            <img src={HTMLlogo} alt='html logo' className='w-20 mx-auto'/>
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
            <img src={CSSlogo} alt='html logo' className='w-20 mx-auto'/>
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
            <img src={JSlogo} alt='html logo' className='w-20 mx-auto'/>
            <p className='my-4'>Javascript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
            <img src={ReactLogo} alt='html logo' className='w-20 mx-auto'/>
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
            <img src={NodeLogo} alt='html logo' className='w-20 mx-auto'/>
            <p className='my-4'>Node</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills