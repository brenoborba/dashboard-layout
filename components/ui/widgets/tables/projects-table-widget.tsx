'use client'
import { Project, projectsData } from '@/lib/data'
import { cn } from '@/lib/utils'
import Badge from '../../badge'
import { Card, CardContent } from '../../card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../table'

const ProjectsTableWidget = () => {
  return (
    <Card className='size-full'>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead className='text-center'>Status</TableHead>
              <TableHead className='text-center'>Budget usage</TableHead>
              <TableHead className='text-center'>Reported Hours</TableHead>
              <TableHead className='text-center'>Tasks</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {projectsData.map((project: Project, index) => (
              <TableRow key={index}>
                <TableCell className='font-semibold'>{project.title}</TableCell>
                <TableCell className='w-auto p-4 text-center xs:min-w-32'>
                  <Badge status={project.status} />
                </TableCell>
                <TableCell
                  className={cn('text-center font-semibold', {
                    'text-green-500': project.budgetUsage < 50,
                    'text-yellow-500': project.budgetUsage >= 50 && project.budgetUsage < 75,
                    'text-red-500': project.budgetUsage >= 75,
                  })}
                >{`${project.budgetUsage}%`}</TableCell>
                <TableCell className='text-center font-semibold'>{`${project.reportedHours}hrs`}</TableCell>
                <TableCell className='text-center font-semibold'>{project.tasks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default ProjectsTableWidget
