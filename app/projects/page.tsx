import PageTitle from '@/components/ui/page-title'
import { projectsData } from '@/lib/data'
import React from 'react'

const Projects = () => {
  return (
    <div>
      <PageTitle>Projects</PageTitle>
      <div className='flex lg:gap-4 xs:gap-2 flex-wrap'>
        {projectsData.map((project, index) => (
          <div
            className='w-72 h-36 rounded-lg p-4 border-neutral-200 border col-span-1'
            key={index}
          >
            <h2 className='text-lg font-semibold'>{project.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
