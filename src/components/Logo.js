import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
  return (

    <div className='flex items-center justify-center border'>
        <MotionLink href="/" 
        className='w-32 h-16 text-dark flex items-center justify-center rounded-full text-2xl font-bold'
        whileHover={{scale:1.2}}>Nishanta</MotionLink>
    </div>
  )
}

export default Logo