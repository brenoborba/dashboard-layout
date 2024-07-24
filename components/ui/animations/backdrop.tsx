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
      className='absolute left-0 top-0 size-full overflow-x-hidden'
    >
      {props.children}
    </motion.div>
  )
}

export default Backdrop
