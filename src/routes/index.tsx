import { Button } from '@/components/Button'
import { Star } from '@/components/Icons'
import { PrizeOverlay } from '@/components/PrizeOverlay/PrizeOverlay'
import { Prizes } from '@/components/Prizes/Prizes'
import { Roulette } from '@/components/Roulette/Roulette'
import { ITEM_WIDTH } from '@/consts'
import { useOverlay } from '@/hooks/useOverlay'
import { useRoulette } from '@/hooks/useRoulette'
import { getPrizes, spin } from '@/services/api'
import type { Prize, Reward } from '@/types/api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { toast } from 'sonner'

export const Route = createFileRoute('/')({
  component: App
})

function App() {
  const queryClient = useQueryClient()
  const {
    data: prizes,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['prizes'],
    queryFn: getPrizes
  })
  const { mutate, isPending } = useMutation({
    mutationFn: spin,
    onSuccess: (reward) => {
      spinRoulette(reward)
      queryClient.invalidateQueries({ queryKey: ['me'] })
      queryClient.invalidateQueries({ queryKey: ['rewards'] })
    },
    onError: (error) => {
      toast.error(error.message || 'Something went wrong...')
    }
  })

  const [prize, setPrize] = useState<Prize>()
  const { isVisible, open, close } = useOverlay()

  const { offset, scroll, isSpinning } = useRoulette({
    itemWidth: ITEM_WIDTH,
    itemCount: prizes?.length ?? 0,
    onSpinEnd: open
  })

  function spinRoulette(reward: Reward) {
    if (!prizes) return

    setPrize(reward.prize)
    const index = prizes.findIndex((prize) => prize.key === reward.prizeKey)
    if (index === -1) {
      toast.info(
        'Unable to find the scroll index for the roulette prize, but the gift has been successfully added to your profile.'
      )
      open()
      return
    }

    scroll(index)
  }

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-[28px] font-bold'>Good luck!</h1>
      <Roulette offset={offset} isSpinning={isSpinning} />
      {!isError && (
        <Button
          onClick={mutate}
          disabled={isSpinning || isLoading}
          isLoading={isPending}
          className='flex w-full max-w-xs items-center gap-1 self-center'
        >
          Spin for 25 <Star />
        </Button>
      )}
      <Prizes />
      {isVisible && prize && <PrizeOverlay prize={prize} close={close} />}
    </div>
  )
}
