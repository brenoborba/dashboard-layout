'use client'

import { TrendingUp } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { projectsSeries } from '@/lib/data'
import { chartConfig } from '@/lib/utils'

export function BarStackedChart() {
  return (
    <Card className='size-full'>
      <CardHeader>
        <CardTitle>Proportion of Reported Hours</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
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
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey='webSiteRedesign'
              stackId='a'
              fill={chartConfig.webSiteRedesign.color}
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey='marketingCampaign'
              stackId='a'
              fill={chartConfig.marketingCampaign.color}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='flex gap-2 font-medium leading-none'>
          Trending up by 10.9% this month <TrendingUp className='h-4 w-4 text-green-500' />
        </div>
        <div className='leading-none text-muted-foreground'>
          Showing the proportion of reported hours between two projects for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
