'use client'
import { ReactNode, useState } from 'react'
import Header from './header'
import MobileSidebar from './mobile-sidebar'
import Sidebar from './sidebar'
import { AnimatePresence } from 'framer-motion'

const CoreLayout = ({ children }: { children: ReactNode }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const handleMobileNav = (state: boolean) => setMobileNavOpen(state)
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <AnimatePresence>
        {mobileNavOpen && <MobileSidebar closeMobileNav={(state: boolean) => handleMobileNav(!state)} />}
      </AnimatePresence>
      <div className='flex flex-1 flex-col overflow-y-auto bg-neutral-100 dark:bg-neutral-800'>
        <Header
          className='flex w-full border-b border-neutral-200 p-2 dark:border-neutral-700'
          handleMobileNav={handleMobileNav}
        />
        <main
          id='content-wrapper'
          className='flex-1 p-4 dark:text-zinc-100 xl:py-5'
        >
          {children}
        </main>
        <footer className='h-12 w-full p-4 text-sm text-neutral-400'>
          Copyright © 2024 Breno Borba. All Rights Reserved
        </footer>
      </div>
    </div>
  )
}

export default CoreLayout
