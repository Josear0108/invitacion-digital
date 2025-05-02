"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import type { ParallaxProps } from "../types/invitation"
import styles from "../styles/ParallaxSection.module.css"

const ParallaxSection: React.FC<ParallaxProps> = ({ children, speed = 0.5, direction = "up", className = "" }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)
  const [elementTop, setElementTop] = useState(0)
  const [elementHeight, setElementHeight] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      setViewportHeight(window.innerHeight)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const updateElementPosition = () => {
      const rect = element.getBoundingClientRect()
      setElementTop(rect.top + window.scrollY)
      setElementHeight(rect.height)
    }

    updateElementPosition()
    window.addEventListener("resize", updateElementPosition)

    return () => {
      window.removeEventListener("resize", updateElementPosition)
    }
  }, [])

  useEffect(() => {
    if (isMobile) return // Disable parallax on mobile for better performance

    const handleScroll = () => {
      if (!ref.current) return

      const scrollPosition = window.scrollY
      const elementMiddle = elementTop + elementHeight / 2
      const viewportMiddle = scrollPosition + viewportHeight / 2
      const distanceFromCenter = elementMiddle - viewportMiddle
      const maxDistance = viewportHeight / 2 + elementHeight / 2
      const percentage = distanceFromCenter / maxDistance

      // Calculate parallax offset based on direction
      let parallaxOffset = 0
      const maxOffset = 100 * speed

      switch (direction) {
        case "up":
          parallaxOffset = percentage * maxOffset
          break
        case "down":
          parallaxOffset = -percentage * maxOffset
          break
        case "left":
          parallaxOffset = percentage * maxOffset
          break
        case "right":
          parallaxOffset = -percentage * maxOffset
          break
      }

      setOffset(parallaxOffset)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed, direction, elementTop, elementHeight, viewportHeight, isMobile])

  const getTransformStyle = () => {
    if (isMobile) return {} // No transform on mobile

    if (direction === "left" || direction === "right") {
      return { transform: `translateX(${offset}px)` }
    }

    return { transform: `translateY(${offset}px)` }
  }

  return (
    <div ref={ref} className={`${styles.parallaxSection} ${className}`} style={getTransformStyle()}>
      {children}
    </div>
  )
}

export default ParallaxSection
