import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='inline-flex items-center justify-center'>
      <div className='xs:w-10 xs:h-7 sm:w-12 sm:h-9 relative mr-1 -mb-2 antialiased'>
        <Image src='/logo.svg' fill={true} alt='Mobo tech logo, black and white' />
      </div>
      <div className='inline-flex items-center'>
        <h1 className='font-bold font-poppins text-2xl text-neutral-100 antialiased'>Mobo</h1>
        <span className='font-normal font-poppins -m-0.5 text-2xl text-neutral-100 antialiased'>Tech</span>
      </div>
    </div>
  )
}

export default Logo
