import type { Reward } from './api'
import type { Dispatch, SetStateAction } from 'react'

export interface RouletteValues {
  roulette: {
    offset: number
    scroll: (index: number) => void
    isSpinning: boolean
  }
  spin: {
    mutate: () => void
    isPending: boolean
  }
  overlay: {
    isVisible: boolean
    open: () => void
    close: () => void
  }
  reward?: Reward
  demo: {
    spin: () => void
    isDemo: boolean
    setIsDemo: Dispatch<SetStateAction<boolean>>
  }
}
