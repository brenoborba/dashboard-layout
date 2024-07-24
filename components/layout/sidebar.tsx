import { ChartPieIcon, CodeBracketIcon, DocumentChartBarIcon, UsersIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactElement } from 'react'
import Logo from './logo'

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

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <aside className='hidden border-neutral-300/50 bg-neutral-800 p-4 text-neutral-100 dark:border-neutral-700/50 dark:bg-neutral-900 lg:block lg:w-52 lg:space-y-4 xl:w-60 xl:space-y-5'>
      <Logo />
      <nav>
        <ul className='space-y-2'>
          {navItems.map((item: NavItem) => {
            const isActive = pathname === item.href
            return (
              <li
                key={item.name}
                className={`${isActive ? 'rounded-lg bg-neutral-700' : 'group rounded-lg hover:bg-neutral-700'}`}
              >
                <Link
                  href={item.href}
                  className='flex items-center p-2'
                >
                  {item.icon}
                  <span
                    className={`ms-2 text-neutral-400 xl:pt-0.5 ${isActive ? 'text-white' : 'group-hover:text-white'} transition-colors`}
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
