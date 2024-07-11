'use client'

import { TrendingUp } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { chartConfig, projectsSeries } from '@/lib/data'

export function BarChartWidget() {
  return (
    <Card className='size-full'>
      <CardHeader>
        <CardTitle>Reported hours</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className='lg:max-h-60 w-full'
        >
          <BarChart
            accessibilityLayer
            data={projectsSeries}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='dashed' />}
            />
            <Bar
              dataKey='webSiteRedesign'
              fill={chartConfig.webSiteRedesign.color}
              radius={4}
            />
            <Bar
              dataKey='mobileAppDevelopment'
              fill={chartConfig.mobileAppDevelopment.color}
              radius={4}
            />
            <Bar
              dataKey='marketingCampaign'
              fill={chartConfig.marketingCampaign.color}
              radius={4}
            />
            <Bar
              dataKey='databaseMigration'
              fill={chartConfig.databaseMigration.color}
              radius={4}
            />
            <Bar
              dataKey='productLaunch'
              fill={chartConfig.productLaunch.color}
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='flex gap-2 font-medium leading-none'>
          Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground'>Showing total visitors for the last 6 months</div>
      </CardFooter>
    </Card>
  )
}
