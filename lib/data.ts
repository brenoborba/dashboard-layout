import { ChartConfig } from '@/components/ui/chart'
import dynamic from 'next/dynamic'

export type Project = {
  title: string
  status: string
  description: string
  budgetUsage: number
  reportedHours: number
  fill: string
  tasks: number
  dueDate: string
}

export const generateRandomDate = () => {
  const currentDate = new Date()
  const twoYearsFromNow = new Date(currentDate.getFullYear() + 2, currentDate.getMonth(), currentDate.getDate())
  const randomTimestamp = currentDate.getTime() + Math.random() * (twoYearsFromNow.getTime() - currentDate.getTime())
  const randomDate = new Date(randomTimestamp)
  return randomDate.toISOString().split('T')[0]
}

export const projectsData: Project[] = [
  {
    title: 'Website Redesign',
    status: 'In Progress',
    description: 'Redesigning the company website to improve user experience and modernize the design.',
    budgetUsage: 50.0,
    reportedHours: 80.5,
    fill: '#2762d8',
    tasks: 8,
    dueDate: generateRandomDate(),
  },
  {
    title: 'Mobile App Development',
    status: 'Completed',
    description: 'Developing a mobile application for iOS and Android platforms.',
    budgetUsage: 75.0,
    reportedHours: 120.0,
    fill: '#2eb88a',
    tasks: 10,
    dueDate: generateRandomDate(),
  },
  {
    title: 'Marketing Campaign',
    status: 'Pending',
    description: 'Planning and executing a marketing campaign to increase brand awareness.',
    budgetUsage: 30.0,
    reportedHours: 50.0,
    fill: '#e98d31',
    tasks: 6,
    dueDate: generateRandomDate(),
  },
  {
    title: 'Database Migration',
    status: 'In Progress',
    description: "Migrating the company's database to a new platform for improved performance and scalability.",
    budgetUsage: 90.0,
    reportedHours: 110.0,
    fill: '#af57dc',
    tasks: 12,
    dueDate: generateRandomDate(),
  },
  {
    title: 'Product Launch',
    status: 'Completed',
    description: 'Launching a new product in the market with a comprehensive marketing strategy.',
    budgetUsage: 60.0,
    reportedHours: 100.0,
    fill: '#e33670',
    tasks: 7,
    dueDate: generateRandomDate(),
  },
]

export const projectsSeries = [
  {
    month: 'January',
    webSiteRedesign: 50.5,
    mobileAppDevelopment: 60.0,
    marketingCampaign: 40.0,
    databaseMigration: 55.0,
    productLaunch: 45.0,
  },
  {
    month: 'February',
    webSiteRedesign: 60.5,
    mobileAppDevelopment: 70.0,
    marketingCampaign: 50.0,
    databaseMigration: 65.0,
    productLaunch: 55.0,
  },
  {
    month: 'March',
    webSiteRedesign: 55.5,
    mobileAppDevelopment: 65.0,
    marketingCampaign: 45.0,
    databaseMigration: 60.0,
    productLaunch: 50.0,
  },
  {
    month: 'April',
    webSiteRedesign: 45.5,
    mobileAppDevelopment: 55.0,
    marketingCampaign: 35.0,
    databaseMigration: 50.0,
    productLaunch: 40.0,
  },
  {
    month: 'May',
    webSiteRedesign: 60.5,
    mobileAppDevelopment: 70.0,
    marketingCampaign: 50.0,
    databaseMigration: 65.0,
    productLaunch: 55.0,
  },
  {
    month: 'June',
    webSiteRedesign: 55.5,
    mobileAppDevelopment: 65.0,
    marketingCampaign: 45.0,
    databaseMigration: 60.0,
    productLaunch: 50.0,
  },
]

export const people = [
  {
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    hours: '+6.0 hours',
    avatarFallback: 'OM',
  },
  {
    name: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    hours: '+14.0 hours',
    avatarFallback: 'JL',
  },
  {
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    hours: '-2.0 hours',
    avatarFallback: 'IN',
  },
  {
    name: 'William Kim',
    email: 'will@email.com',
    hours: '+10.0 hours',
    avatarFallback: 'WK',
  },
  {
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    hours: '+12.0 hours',
    avatarFallback: 'SD',
  },
  // {
  //   name: 'John Smith',
  //   email: 'john.smith@email.com',
  //   hours: '+8.0 hours',
  //   avatarFallback: 'JS',
  // },
]
