import { ITEM_WIDTH } from '@/consts'
import { useOverlay } from '@/hooks/useOverlay'
import { useRoulette } from '@/hooks/useRoulette'
import { getPrizes, spin } from '@/services/api'
import type { Reward } from '@/types/api'
import type { RouletteValues } from '@/types/contexts'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import WebApp from '@twa-dev/sdk'
import { createContext, useState, type FC, type ReactNode } from 'react'
import { toast } from 'sonner'

export const RouletteContext = createContext<RouletteValues | null>(null)

export const RouletteContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const queryClient = useQueryClient()
  const {
    data: prizes,
    isLoading,
    isSuccess,
    isError
  } = useQuery({
    queryKey: ['prizes'],
    queryFn: () => getPrizes()
  })

  const { mutate, isPending } = useMutation({
    mutationFn: spin,
    onSuccess: (reward) => {
      spinRoulette(reward)
      queryClient.invalidateQueries({ queryKey: ['me'] })
      queryClient.invalidateQueries({ queryKey: ['rewards'] })
      queryClient.invalidateQueries({ queryKey: ['actions'] })
    },
    onError: (error) => {
      toast.error(error.message || 'Something went wrong...')
    }
  })

  const [reward, setReward] = useState<Reward>()
  const { isVisible, open, close } = useOverlay()

  const { offset, scroll, isSpinning } = useRoulette({
    itemWidth: ITEM_WIDTH,
    itemCount: prizes?.length ?? 0,
    onSpinEnd: () => {
      open()
      WebApp.HapticFeedback.impactOccurred('soft')
    }
  })

  function spinRoulette(reward: Reward) {
    if (!prizes) return

    setReward(reward)
    const index = prizes.findIndex((prize) => prize.code === reward.prizeCode)
    if (index === -1) {
      toast.info(
        'Unable to find the scroll index for the roulette prize, but the gift has been successfully added to your profile.'
      )
      open()
      return
    }

    scroll(index)
  }

  const demoSpin = () => {
    if (!prizes) return

    const prize = prizes[Math.floor(Math.random() * prizes.length)]
    const reward = {
      _id: '',
      prizeCode: prize.code,
      user: '',
      prize,
      createdAt: new Date().toISOString()
    }

    spinRoulette(reward)
  }

  const [isDemo, setIsDemo] = useState(false)

  const value = {
    prizes: { items: prizes, isLoading, isSuccess, isError },
    spin: { mutate, isPending },
    overlay: { isVisible, open, close },
    roulette: { offset, scroll, isSpinning },
    demo: { spin: demoSpin, isDemo, setIsDemo },
    reward
  }

  return (
    <RouletteContext.Provider value={value}>
      {children}
    </RouletteContext.Provider>
  )
}
