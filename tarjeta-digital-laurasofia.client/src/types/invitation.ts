import type React from "react"
export interface GuestConfirmation {
  name: string
  guests: string
  message: string
}

export interface Photo {
  src: string
  alt: string
}

export interface TimelineEvent {
  time: string
  title: string
  description: string
}

export interface ParallaxProps {
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
  children: React.ReactNode
}
