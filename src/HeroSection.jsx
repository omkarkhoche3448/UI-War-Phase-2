import logo from "./assets/ISTELogo.png";

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowDownCircle, Star, Activity, Feather } from 'lucide-react'

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* ISTE Logo */}
      <div className="absolute top-8 left-8 sm:left-16">
        <img
          src={logo} // Replace with the actual path to the ISTE logo image
          alt="ISTE Logo"
          className="w-16 h-16 sm:w-24 sm:h-24 object-contain"
        />
      </div>

      {/* Dynamic background with parallax effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary to-secondary"
        style={{
          backgroundSize: '400% 400%',
          backgroundPosition: `${50 + scrollY * 0.1}% ${50 + scrollY * 0.1}%`,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Animated particles */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        ))}
      </motion.div>

      {/* Floating Lucide icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[Star, Activity, Feather].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-white opacity-75"
            style={{
              fontSize: '1.5rem',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <Icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          We Are Here to{' '}
          <motion.span
            className="inline-block"
            animate={{
              rotateX: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 5,
            }}
          >
            Bring Change
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg sm:text-2xl text-white max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          ISTE is advancing technical education across India by empowering students, educators, and industry professionals with the right tools for a brighter tomorrow.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-28 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <ArrowDownCircle className="h-10 w-10 text-white opacity-75" />
      </motion.div>
    </section>
  )
}
