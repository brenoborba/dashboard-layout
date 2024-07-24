import React from 'react'

type Props = {
  children: React.ReactNode
}

const PageTitle = (props: Props) => {
  return <h2 className='mb-4 text-3xl font-bold tracking-tight xs:mb-2'>{props.children}</h2>
}

export default PageTitle
