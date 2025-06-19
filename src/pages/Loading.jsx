// LoadingScreen.jsx
import { useEffect, useState } from 'react'
import { motion, animate } from 'framer-motion'

export default function LoadingScreen({ onFinish }) {
  const [percent, setPercent] = useState(0)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 3,
      onUpdate: latest => setPercent(Math.floor(latest)),
      onComplete: () => {
        setExpanded(true)
        setTimeout(onFinish, 1500)
      }
    })
    return () => controls.stop()
  }, [onFinish])

  return (
    <div className="fixed inset-0 bg-black text-white z-50 flex items-center justify-center overflow-hidden">
      <div className="absolute left-6 bottom-4 text-6xl font-bold tracking-wide">
        {percent.toString().padStart(2, '0')}<span className="inline-block -ml-2">%</span>
      </div>

      <motion.div
        initial={{ width: '16rem', height: '2rem', rotate: 0, opacity: 1 }}
        animate={expanded ? {
          width: '200vw',
          height: '200vh',
          rotate: 360,
          opacity: 0,
          borderRadius: '50%',
          transition: { duration: 1, ease: 'easeInOut' }
        } : {
          width: `${percent}%`,
          opacity: 1,
          transition: { ease: 'easeInOut', duration: 0.3 }
        }}
        className="bg-white"
        style={{ borderRadius: '0.5rem' }}
      />
    </div>
  )
}
