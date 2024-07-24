import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='inline-flex items-center justify-center'>
      <div className='relative -mb-2 mr-1 antialiased xs:h-7 xs:w-10 sm:h-9 sm:w-12'>
        <Image
          src='/logo.svg'
          fill={true}
          alt='Mobo tech logo, black and white'
        />
      </div>
      <div className='inline-flex items-center'>
        <h1 className='font-poppins text-2xl font-bold text-neutral-100 antialiased'>Mobo</h1>
        <span className='font-poppins -m-0.5 text-2xl font-normal text-neutral-100 antialiased'>Tech</span>
      </div>
    </div>
  )
}

export default Logo
