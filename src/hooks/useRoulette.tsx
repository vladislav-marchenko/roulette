import WebApp from '@twa-dev/sdk'
import { useCallback, useEffect, useRef, useState } from 'react'

const easeInOutQuart = (t: number) => {
  return t < 0.5 ? 8 * t * t * t : 1 - Math.pow(-2 * t + 2, 6) / 2
}

export const useRoulette = ({
  itemWidth,
  itemCount,
  onSpinEnd
}: {
  itemWidth: number
  itemCount: number
  onSpinEnd?: () => void
}) => {
  const [offset, setOffset] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)
  const animationFrameRef = useRef<number | null>(null)

  const cycleWidth = itemWidth * itemCount

  const stopAnimation = useCallback(() => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }
  }, [])

  const scroll = useCallback(
    (targetItemIndex: number, duration = 5000) => {
      if (isSpinning) return

      setIsSpinning(true)
      stopAnimation()

      const startTime = performance.now()
      const startOffset = offset
      const extraCycles = 3

      const maxRandomOffset = itemWidth * 0.25
      const randomOffset = Math.random() * maxRandomOffset * 2 - maxRandomOffset
      const targetOffset =
        targetItemIndex * itemWidth +
        extraCycles * cycleWidth +
        itemWidth / 2 -
        window.innerWidth / 2 +
        randomOffset

      let lastTick = 0
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easedProgress = easeInOutQuart(progress)
        const newOffset =
          startOffset + (targetOffset - startOffset) * easedProgress

        const currentTick = Math.floor(newOffset / itemWidth)
        if (currentTick !== lastTick) {
          lastTick = currentTick
          WebApp.HapticFeedback.impactOccurred('light')
        }

        // Normalize offset to stay within one cycle for seamless looping
        setOffset(newOffset % cycleWidth)

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate)
        } else {
          setIsSpinning(false)
          onSpinEnd && onSpinEnd()
          setOffset(targetOffset % cycleWidth)
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    },
    [offset, isSpinning, itemWidth, cycleWidth, onSpinEnd]
  )

  useEffect(() => {
    return () => stopAnimation()
  }, [stopAnimation])

  return { offset, scroll, isSpinning }
}
