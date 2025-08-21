import type { Prize, Reward } from './api'
import type { Dispatch, SetStateAction } from 'react'

export interface RouletteValues {
  prizes: {
    items?: Prize[]
    isLoading: boolean
    isSuccess: boolean
    isError: boolean
    error: Error | null
    refetch: () => void
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
  roulette: {
    offset: number
    scroll: (index: number) => void
    isSpinning: boolean
  }
  reward?: Reward
  demo: {
    spin: () => void
    isDemo: boolean
    setIsDemo: Dispatch<SetStateAction<boolean>>
  }
}
