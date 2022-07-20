import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-[#0a192f] w-full h-screen flex justify-center items-center p-4'>
      <form action='https://getform.io/f/b549acdc-9ac0-4b0d-b7c2-3955725c46e7' method="POST" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form or just email me at rodrigo.roa14@gmail.com</p>
        </div>
        <input className='bg-gray-300 p-2' type='text' placeholder='Enter your name' name='name'/>
        <input className='my-4 p-2 bg-gray-300' type='email' placeholder='Enter your email' name='email'/>
        <textarea className='bg-gray-300 p-2' name='message' rows='10' placeholder='Write your massage'>
        </textarea>
        <button className='text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-pink-600 hover:border-pink-600'>Contact me</button>
      </form>
    </div>
  )
}

export default Contact