import { Project } from '@/lib/data'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
  children: React.ReactNode
  status: Project['status']
}

const Badge = (props: Props) => {
  return (
    <span
      className={cn(
        'bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300',
        {
          'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300': props.status === 'In Progress',
          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300': props.status === 'Pending',
          'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300': props.status === 'Completed',
        }
      )}
    >
      {props.children}
    </span>
  )
}

export default Badge
