"use client"

import useScrollProgress from "@/hooks/useScrollProgress"
import { motion } from "framer-motion"

const varients = {
  hidden: { opacity: 0},
  enter: { opacity: 1},
}
const Template = ({children}) => {
  const completion = useScrollProgress()
  return (
    <>
    <motion.main
    variants={varients}
    initial='hidden'
    animate='enter'
    transition={{
      type: 'Linear', delay:0.2, duration: 0.4
    }}>
      {children}
    </motion.main>
    {/* completion bar */}
    <span style={{transform:  `translateY(${completion -100}%)`}} className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"></span>
    <div className="h-[4000px]"></div>
    </>
  )
}

export default Template