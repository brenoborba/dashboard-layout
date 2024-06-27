'use client'
import { MoonIcon, SunIcon, UserIcon } from '@heroicons/react/20/solid'
import React, { ReactNode, useState } from 'react'
import Header from './header'
import Sidebar from './sidebar'

const CoreLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex h-screen'>
      <Sidebar className='bg-neutral-800 text-neutral-100 py-4 px-4 lg:w-52 xl:w-60 hidden lg:block border-neutral-300/50 dark:border-neutral-700/50 dark:bg-neutral-900' />
      <div className='bg-neutral-100 flex-1 dark:bg-neutral-800 flex flex-col'>
        <Header className='flex p-2 w-full border-b border-neutral-200 dark:border-neutral-700' />
        <main id='content-wrapper' className='flex-1 px-4 py-4 xl:py-5 dark:text-zinc-100'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default CoreLayout
