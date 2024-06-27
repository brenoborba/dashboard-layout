import React from 'react'

type Props = {
  children: React.ReactNode
}

const PageTitle = (props: Props) => {
  return <h2 className='text-3xl font-bold tracking-tight'>{props.children}</h2>
}

export default PageTitle
