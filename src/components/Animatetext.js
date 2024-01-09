import React from 'react'
import { useState } from 'react'
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"


const heading = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
      }
  
    }
  }

const Animatetext = ({text, className = "" }) => {
    return (
        <div>
            <div className='w-full mx-auto py-2 flex item-center justify-center overflow-hidden'>
                <motion.h1 className='inline-block w-full text-dark font-bold text-6xl' variants={heading}
                    initial="initial"
                    animate="animate"
                >
                    <Typewriter options={{
                        autoStart: true,
                        loop: true,
                        delay: 80,
                        strings: [
                            "I'm Nishanta",
                            "I'm a Student",
                            "I'm a Web Developer",
                            "I'm a Tech Enthusiast",
                        ],
                    }} />
                </motion.h1>
            </div>

            <p>{text}
            </p>
        </div>
    )
}

export default Animatetext