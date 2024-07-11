'use client'

import { TrendingDown } from 'lucide-react'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { chartConfig, projectsSeries } from '@/lib/data'

export function AreaChartWidget() {
  return (
    <Card className='size-full'>
      <CardHeader>
        <CardTitle>Bugdet usage</CardTitle>
        <CardDescription>Showing total budget usage for the last 6 months for each project</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className='lg:max-h-full w-full'
        >
          <AreaChart
            accessibilityLayer
            data={projectsSeries}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='dot' />}
            />
            <Area
              dataKey='webSiteRedesign'
              type='natural'
              fill={chartConfig.webSiteRedesign.color}
              fillOpacity={0.4}
              stroke={chartConfig.webSiteRedesign.color}
              stackId='a'
            />
            <Area
              dataKey='mobileAppDevelopment'
              type='natural'
              fill={chartConfig.mobileAppDevelopment.color}
              fillOpacity={0.4}
              stroke={chartConfig.mobileAppDevelopment.color}
              stackId='a'
            />
            <Area
              dataKey='marketingCampaign'
              type='natural'
              fill={chartConfig.marketingCampaign.color}
              fillOpacity={0.4}
              stroke={chartConfig.marketingCampaign.color}
              stackId='a'
            />
            <Area
              dataKey='databaseMigration'
              type='natural'
              fill={chartConfig.databaseMigration.color}
              fillOpacity={0.4}
              stroke={chartConfig.databaseMigration.color}
              stackId='a'
            />
            <Area
              dataKey='productLaunch'
              type='natural'
              fill={chartConfig.productLaunch.color}
              fillOpacity={0.4}
              stroke={chartConfig.productLaunch.color}
              stackId='a'
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className='flex w-full items-start gap-2 text-sm'>
          <div className='grid gap-2'>
            <div className='flex items-center gap-2 font-medium leading-none'>
              Trending down by 10.5% this month <TrendingDown className='h-4 w-4 text-red-500' />
            </div>
            <div className='flex items-center gap-2 leading-none text-muted-foreground'>January - June 2024</div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
