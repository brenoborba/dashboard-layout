'use client'
import PageTitle from '@/components/ui/page-title'
import { AreaChartWidget } from '@/components/ui/widgets/charts/area-chart-widget'
import { BarChartWidget } from '@/components/ui/widgets/charts/bar-chart-widget'
import { BarStackedChart } from '@/components/ui/widgets/charts/bar-stack-chart-widget'
import { PieChartWidget } from '@/components/ui/widgets/charts/pie-chart-widget'
import { LatestReports } from '@/components/ui/widgets/tables/latest-reports-table-widget'
import ProjectsTableWidget from '@/components/ui/widgets/tables/projects-table-widget'

export default function Home() {
  return (
    <div>
      <PageTitle>Dashboard</PageTitle>
      <div className='grid gap-2 xs:grid-cols-1 md:grid-cols-12 md:gap-4 xl:grid-cols-12'>
        <div className='md:col-span-full xl:col-span-8'>
          <ProjectsTableWidget />
        </div>
        <div className='md:col-span-6 xl:col-span-4'>
          <PieChartWidget />
        </div>

        <div className='md:col-span-6 xl:col-span-4'>
          <LatestReports />
        </div>

        <div className='md:col-span-6 xl:col-span-4'>
          <AreaChartWidget />
        </div>

        <div className='h-full md:col-span-6 xl:col-span-4'>
          <BarStackedChart />
        </div>

        <div className='md:col-span-full'>
          <BarChartWidget />
        </div>
      </div>
    </div>
  )
}
