import React from 'react'
import { motion } from 'framer-motion'
type Props = {
  children: React.ReactNode
  onClick: () => void
}

const Backdrop = (props: Props) => {
  return (
    <motion.div
      onClick={props.onClick}
      className='absolute top-0 left-0 size-full overflow-x-hidden'
    >
      {props.children}
    </motion.div>
  )
}

export default Backdrop
