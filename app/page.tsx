'use client'
import PageTitle from '@/components/ui/page-title'
import { AreaChartWidget } from '@/components/ui/widgets/charts/area-chart-widget'
import { BarChartWidget } from '@/components/ui/widgets/charts/bar-chart-widget'
import { PieChartWidget } from '@/components/ui/widgets/charts/pie-chart-widget'
import { LatestReports } from '@/components/ui/widgets/tables/latest-reports-table-widget'
import ProjectsTableWidget from '@/components/ui/widgets/tables/projects-table-widget'

export default function Home() {
  return (
    <div>
      <PageTitle>Dashboard</PageTitle>
      <div className='grid lg:grid-cols-2 xl:grid-cols-4 xs:grid-cols-1 md:gap-4 gap-2'>
        <div className='lg:col-span-2 md:col-span-1 xl:col-span-3'>
          <ProjectsTableWidget />
        </div>
        <div className='lg:col-span-1 xl:col-span-1'>
          <PieChartWidget />
        </div>

        <div className='xl:col-span-1'>
          <LatestReports />
        </div>

        <div className='lg:col-span-1 xl:col-span-1'>
          <AreaChartWidget />
        </div>

        <div className='lg:col-span-1 xl:col-span-2'>
          <BarChartWidget />
        </div>
      </div>
    </div>
  )
}
