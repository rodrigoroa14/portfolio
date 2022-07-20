import React, {useState} from 'react'
import CV from '../assets/Rodrigo-Roa-CV.pdf'
import {FaBars, FaTimes, FaLinkedin, FaGithub, } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillFilePersonFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


  return ( 
    <div className="fixed w-full h-[80px] flex justify-between 
    items-center px-4 bg-[#0a192f] text-gray-300">
       <div>
        Rodri ;P
       </div>
      {/* menu */}
        <ul className='hidden md:flex cursor-pointer'>
          <Link to='home' smooth duration={500}>
            <li>Home</li>
          </Link>
          <Link to='about' smooth duration={500}>
            <li>About</li>
          </Link>
          <Link to='skills' smooth duration={500}>
            <li>Skills</li>
          </Link>
          <Link to='projects' smooth duration={500}>
            <li>Projects</li>
          </Link>
          <Link to='contact' smooth duration={500}>
            <li>Contact</li>
          </Link>
        </ul>
       

       {/* hamburguer */}
       <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
       </div>
       {/* Mobile menu */}
       <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center cursor-pointer'}>
          <Link onClick={handleClick} to='home' smooth duration={500}>
            <li className='py-6 text-4xl'>Home</li>
          </Link>
          <Link onClick={handleClick} to='about' smooth duration={500}>
            <li className='py-6 text-4xl'>About</li>
          </Link>
          <Link onClick={handleClick} to='skills' smooth duration={500}>
            <li className='py-6 text-4xl'>Skills</li>
          </Link>
          <Link onClick={handleClick} to='projects' smooth duration={500}>
            <li className='py-6 text-4xl'>Projects</li>
          </Link>
          <Link onClick={handleClick} to='contact' smooth duration={500}>
            <li className='py-6 text-4xl'>Contact</li>
          </Link>
        </ul>

        {/* socialLiks */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='flex w-[160px] h-[60px] justify-between w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between w-full items-center text-white'
              href='https://www.linkedin.com/in/rodrigo-roa14'>
                LinkedIn <FaLinkedin size={30}/>
              </a>
            </li>
            <li className='flex w-[160px] h-[60px] justify-between w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
              <a className='flex justify-between w-full items-center text-white'
              href='https://www.github.com/rodrigoroa14'>
                Github <FaGithub size={30}/>
              </a>
            </li>
            <li className='flex w-[160px] h-[60px] justify-between w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-green-400'>
              <a className='flex justify-between w-full items-center text-white'
              href='mailto:rodrigo.roa14@gmail.com' target='_blank' rel='noreferrer'>
                Email <HiOutlineMail size={30}/>
              </a>
            </li>
            <li className='flex w-[160px] h-[60px] justify-between w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
              <a className='flex justify-between w-full items-center text-white'
              href={CV} download>
                Resume <BsFillFilePersonFill size={30}/>
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default NavBar