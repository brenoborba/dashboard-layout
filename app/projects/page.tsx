'use client'
import Badge from '@/components/ui/badge'
import PageTitle from '@/components/ui/page-title'
import { Progress } from '@/components/ui/progress'
import { projectsData } from '@/lib/data'
import { darkModeAtom, truncateText } from '@/lib/utils'
import { CalendarDaysIcon } from '@heroicons/react/20/solid'
import { useAtom } from 'jotai'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Projects = () => {
  const [darkMode] = useAtom(darkModeAtom)
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  return (
    <div>
      <PageTitle>Projects</PageTitle>
      <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {projectsData.map((project, index) => {
          const truncatedDescription = truncateText(project.description, 80)
          return (
            <Link
              key={index}
              href='#'
            >
              <div
                key={index}
                className='col-span-1 flex min-h-64 w-full flex-col justify-between rounded-lg border border-neutral-200 p-4 transition-colors hover:border-neutral-300 dark:border-neutral-700'
              >
                <div className='flex items-center gap-2'>
                  <Image
                    src={darkMode ? '/favicon-logo.svg' : '/favicon-logo-dark.svg'}
                    alt='Project logo'
                    width={25}
                    height={25}
                    className='h-8 w-8 self-start rounded-full border border-neutral-200 object-contain'
                  />
                  <div className='w-full'>
                    <div className='flex w-full items-center gap-2 xs:justify-start sm:justify-normal'>
                      <h2 className='text-lg font-semibold'>{project.title}</h2>
                      <Badge status={project.status} />
                    </div>
                    <span className='text-sm text-neutral-500'>{truncatedDescription}</span>
                  </div>
                </div>

                <div>
                  <Progress
                    value={project.budgetUsage}
                    className='mb-1 h-2'
                  />
                  <div className='mb-2 flex'>
                    <span className='text-xs text-neutral-500'>Budget usage:</span>
                    <span className='ml-auto text-xs font-semibold'>{project.budgetUsage}%</span>
                  </div>
                  <div className='flex items-center'>
                    <CalendarDaysIcon className='h-4 w-4 text-neutral-500' />
                    <span className='text-sm font-medium text-neutral-500'>&nbsp;Due date:&nbsp;</span> <br />
                    <span className='text-sm text-neutral-500'>
                      {isBrowser ? moment(project.dueDate).format('LL') : ''}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
