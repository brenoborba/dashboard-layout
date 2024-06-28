'use client'
import { ReactNode, useState } from 'react'
import Header from './header'
import MobileSidebar from './mobile-sidebar'
import Sidebar from './sidebar'

const CoreLayout = ({ children }: { children: ReactNode }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const handleMobileNav = (state: boolean) => setMobileNavOpen(state)
  return (
    <div className='flex h-screen'>
      <Sidebar />
      {mobileNavOpen && <MobileSidebar closeMobileNav={(state: boolean) => handleMobileNav(!state)} />}
      <div className='bg-neutral-100 flex-1 dark:bg-neutral-800 flex flex-col'>
        <Header
          className='flex p-2 w-full border-b border-neutral-200 dark:border-neutral-700'
          handleMobileNav={handleMobileNav}
        />
        <main id='content-wrapper' className='flex-1 p-4 xl:py-5 dark:text-zinc-100'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default CoreLayout
