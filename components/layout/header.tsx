import { SunIcon, MoonIcon, UserIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'

const Header = ({ className }: { className: string }) => {
  const [dark, setDark] = useState<boolean>(false)
  const handleDarkMode = () => {
    setDark(!dark)
    document.body.classList.toggle('dark')
  }
  return (
    <div id='header' className={className}>
      <div className='flex gap-6 items-center w-full justify-end'>
        <button
          className='border hover:bg-neutral-200 transition-colors p-1 rounded-md border-neutral-700 dark:invert'
          onClick={handleDarkMode}
        >
          {dark ? <SunIcon className='size-4' /> : <MoonIcon className='size-4' />}
        </button>
        <button className='inline-flex items-center rounded-lg p-2 hover:bg-neutral-200 transition-colors text-neutral-800 dark:hover:bg-neutral-600/30 dark:text-neutral-50'>
          <span>John Doe</span>
          <UserIcon className='ms-2 size-7 rounded-full border border-neutral-400 p-1' />
        </button>
      </div>
    </div>
  )
}

export default Header
