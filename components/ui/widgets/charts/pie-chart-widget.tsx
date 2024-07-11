'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { chartConfig, projectsData } from '@/lib/data'
import { TrendingUp } from 'lucide-react'
import moment from 'moment'
import * as React from 'react'
import { Label, Pie, PieChart } from 'recharts'

export function PieChartWidget() {
  const totalReportedHours = React.useMemo(() => {
    return projectsData.reduce((acc, curr) => acc + curr.reportedHours, 0)
  }, [])

  return (
    <Card className='flex flex-col size-full'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Hours reported in the current month</CardTitle>
        <CardDescription>{moment().format('MMMM YYYY')}</CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[200px]'
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={projectsData}
              dataKey='reportedHours'
              nameKey='title'
              innerRadius={55}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-3xl font-bold'
                        >
                          {totalReportedHours.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground'
                        >
                          Hours
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col text-sm'>
        <div className='flex items-center gap-2 font-medium leading-none'>
          5.2% increase in comparison to the past month <TrendingUp className='h-4 w-4 text-green-500' />
        </div>
        {/* <div className='leading-none text-muted-foreground'>Showing total reported hours for the last month</div> */}
      </CardFooter>
    </Card>
  )
}
