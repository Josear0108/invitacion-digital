"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import styles from "../../../styles/Countdown.module.css"

interface CountdownTimerProps {
  targetDate: Date
  className?: string
}

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number }

export function CountdownTimer({ targetDate, className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days:0,hours:0,minutes:0,seconds:0 })

  useEffect(() => {
    const calculate = () => {
      const diff = targetDate.getTime() - Date.now()
      if (diff > 0) {
        setTimeLeft({
          days:   Math.floor(diff / 86400000),
          hours:  Math.floor((diff / 3600000) % 24),
          minutes: Math.floor((diff / 60000) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        })
      } else {
        setTimeLeft({ days:0,hours:0,minutes:0,seconds:0 })
      }
    }

    calculate()
    if (targetDate.getTime() > Date.now()) {
      const timer = setInterval(calculate, 1000)
      return () => clearInterval(timer)
    }
  }, [targetDate])

  return (
    <div className={`${styles.countdown} ${className}`}>
      <h3 className={styles.title}>Faltan</h3>
      <div className={styles.units}>
        <TimeUnit value={timeLeft.days}    label="Días"    />
        <TimeUnit value={timeLeft.hours}   label="Horas"   />
        <TimeUnit value={timeLeft.minutes} label="Minutos" />
        <TimeUnit value={timeLeft.seconds} label="Segundos"/>
      </div>
      <p className={styles.intro}>para celebrar juntos este día especial</p>
    </div>
  )
}

interface TimeUnitProps { value: number; label: string }

function TimeUnit({ value, label }: TimeUnitProps) {
  return (
    <motion.div
      className={styles.timeUnit}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={styles.timeUnitBox}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 0.5,
          repeat: value === 0 ? 0 : Infinity,
          repeatDelay: 1,
        }}
      >
        <span className={styles.timeValue}>
          {value.toString().padStart(2, "0")}
        </span>
      </motion.div>
      <span className={styles.timeLabel}>{label}</span>
    </motion.div>
  )
}
