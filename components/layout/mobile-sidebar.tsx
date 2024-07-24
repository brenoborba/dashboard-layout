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
        className='fixed left-0 top-0 z-50 flex h-screen flex-col space-y-6 bg-neutral-800 px-2 py-4 dark:bg-neutral-900 xs:min-w-[60%] md:min-w-[40%] md:px-4 lg:hidden'
        variants={variants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div className='flex items-center justify-between'>
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
                  className={`${isActive ? 'rounded-lg bg-neutral-600' : 'group rounded-lg hover:bg-neutral-600'}`}
                >
                  <Link
                    href={item.href}
                    onClick={props.closeMobileNav}
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
      </motion.aside>
    </Backdrop>
  )
}

export default MobileSidebar
