import { XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Backdrop from '../ui/animations/backdrop'
import Logo from './logo'
import { NavItem, navItems } from './sidebar'
import { motion } from 'framer-motion'

type Props = {
  closeMobileNav: any
}

const variants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: '0',
    transition: {
      duration: 0.2,
      stiffness: 500,
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      duration: 0.2,
      damping: 25,
      stiffness: 500,
    },
  },
}

const MobileSidebar = (props: Props) => {
  const pathname = usePathname()
  return (
    <Backdrop onClick={props.closeMobileNav}>
      <motion.aside
        onClick={(e) => e.stopPropagation()}
        className='flex flex-col lg:hidden h-screen xs:min-w-[60%] md:min-w-[40%] bg-neutral-800 dark:bg-neutral-900 py-4 px-2 fixed top-0 left-0 z-50 md:px-4 space-y-6'
        variants={variants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div className='flex justify-between items-center'>
          <Logo />
          <button>
            <XMarkIcon
              className='size-6 text-neutral-100'
              onClick={props.closeMobileNav}
            />
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
                  <Link
                    href={item.href}
                    onClick={props.closeMobileNav}
                    className='flex items-center p-2'
                  >
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
      </motion.aside>
    </Backdrop>
  )
}

export default MobileSidebar
