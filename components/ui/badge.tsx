import { Project } from '@/lib/data'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
  status: Project['status']
  className?: string
}

const Badge = (props: Props) => {
  return (
    <span
      className={cn(
        'rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300',
        {
          'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300': props.status === 'In Progress',
          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300': props.status === 'Pending',
          'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300': props.status === 'Completed',
        }
      )}
    >
      {props.status}
    </span>
  )
}

export default Badge
