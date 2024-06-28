import { XMarkIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { NavItem, navItems } from './sidebar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './logo'

type Props = {
  closeMobileNav: any
}

const MobileSidebar = (props: Props) => {
  const pathname = usePathname()
  return (
    <div className='flex flex-col lg:hidden h-screen xs:min-w-[60%] md:min-w-[40%] bg-neutral-800 dark:bg-neutral-900 fixed top-0 left-0 z-50 py-4 px-2 md:px-4 space-y-6'>
      <div className='flex justify-between items-center'>
        <Logo />
        <button>
          <XMarkIcon className='size-6 text-neutral-100' onClick={props.closeMobileNav} />
        </button>
      </div>
      <nav>
        <ul className='space-y-2 lg:space-y-4'>
          {navItems.map((item: NavItem) => {
            const isActive = pathname === item.href
            return (
              <li
                key={item.name}
                className={`${isActive ? ' bg-neutral-600 rounded-lg' : 'group hover:bg-neutral-600 rounded-lg'}`}
              >
                <Link href={item.href} className='flex items-center p-2'>
                  {item.icon}
                  <span
                    className={`text-neutral-400 ms-2 xl:pt-0.5 ${isActive ? 'text-white' : 'group-hover:text-white'} transition-colors`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default MobileSidebar
