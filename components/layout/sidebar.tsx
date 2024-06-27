import { ChartPieIcon, CodeBracketIcon, DocumentChartBarIcon, UsersIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { ReactElement } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export type NavItem = {
  name: string
  href: string
  icon: ReactElement
  iconClassName?: string
}

const defaultIconClassName = 'size-5 text-neutral-400 group-hover:text-white transition-colors'
export const navItems: NavItem[] = [
  {
    name: 'Dashboard',
    href: '/',
    icon: <ChartPieIcon className={defaultIconClassName} />,
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: <CodeBracketIcon className={defaultIconClassName} />,
  },
  {
    name: 'Reports',
    href: '/reports',
    icon: <DocumentChartBarIcon className={defaultIconClassName} />,
  },
  {
    name: 'Users',
    href: '/users',
    icon: <UsersIcon className={defaultIconClassName} />,
  },
]

const Sidebar = ({ className }: { className: string }) => {
  const pathname = usePathname()
  return (
    <aside className={className}>
      <div className='flex items-center justify-start'>
        <Image
          src='/logo.svg'
          width={45}
          height={45}
          alt='Mobo tech logo, black and white'
          className='mr-1 object-cover xl:ml-2 lg:ml-1'
        />
        <h1 className='xl:text-2xl font-bold font-poppins lg:text-xl'>Mobo</h1>
        <span className='font-normal font-poppins xl:text-2xl -m-0.5 lg:text-xl'>Tech</span>
      </div>
      <nav>
        <ul className='space-y-2 xl:py-8'>
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
    </aside>
  )
}

export default Sidebar
