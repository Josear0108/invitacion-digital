"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface CountdownTimerProps {
  targetDate: Date
  className?: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate, className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        // Si ya pasó la fecha, mostrar todos los valores en cero
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calcular inmediatamente
    calculateTimeLeft()

    // Actualizar cada segundo solo si la fecha aún no ha pasado
    const currentTime = new Date().getTime()
    if (targetDate.getTime() > currentTime) {
      const timer = setInterval(calculateTimeLeft, 1000)
      // Limpiar intervalo al desmontar
      return () => clearInterval(timer)
    }
  }, [targetDate])

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <h3 className="text-2xl font-light text-emerald-600 mb-4">Faltan</h3>

      <div className="flex flex-wrap justify-center gap-4">
        <TimeUnit value={timeLeft.days} label="Días" />
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <TimeUnit value={timeLeft.minutes} label="Minutos" />
        <TimeUnit value={timeLeft.seconds} label="Segundos" />
      </div>

      <p className="mt-4 text-emerald-700 italic">para celebrar juntos este día especial</p>
    </div>
  )
}

interface TimeUnitProps {
  value: number
  label: string
}

function TimeUnit({ value, label }: TimeUnitProps) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-20 h-20 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-center shadow-md"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 0.5, repeat: value === 0 ? 0 : Number.POSITIVE_INFINITY, repeatDelay: 10 }}
      >
        <span className="text-3xl font-bold text-emerald-600">{value.toString().padStart(2, "0")}</span>
      </motion.div>
      <span className="text-sm text-emerald-700 mt-2">{label}</span>
    </motion.div>
  )
}
