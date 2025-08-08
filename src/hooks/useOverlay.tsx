import { useCallback, useState } from 'react'

export const useOverlay = () => {
  const [isVisible, setIsVisible] = useState(false)

  const open = useCallback(() => {
    document.body.style.overflow = 'hidden'
    setIsVisible(true)
  }, [])

  const close = useCallback(() => {
    document.body.style.overflow = 'auto'
    setIsVisible(false)
  }, [])

  return { isVisible, open, close }
}
