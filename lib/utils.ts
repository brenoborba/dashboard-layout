import { ChartConfig } from '@/components/ui/chart'
import { type ClassValue, clsx } from 'clsx'
import { atom } from 'jotai'
import { twMerge } from 'tailwind-merge'

export const darkModeAtom = atom<boolean>(false)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text
  }

  let truncated = text.slice(0, maxLength)
  let lastSpaceIndex = truncated.lastIndexOf(' ')

  if (lastSpaceIndex !== -1) {
    truncated = truncated.slice(0, lastSpaceIndex)
  }

  return truncated + '...'
}

export const chartConfig = {
  webSiteRedesign: {
    label: 'Web Site Redesign',
    color: '#ef4444',
  },
  mobileAppDevelopment: {
    label: 'Mobile App Development',
    color: '#22c55e',
  },
  marketingCampaign: {
    label: 'Marketing Campaign',
    color: '#3b82f6',
  },
  databaseMigration: {
    label: 'Database Migration',
    color: '#8b5cf6',
  },
  productLaunch: {
    label: 'Product Launch',
    color: '#e98d31',
  },
} as ChartConfig
