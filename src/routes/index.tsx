import { Button } from '@/components/Button'
import { Star } from '@/components/Icons'
import { PrizeOverlay } from '@/components/PrizeOverlay/PrizeOverlay'
import { Prizes } from '@/components/Prizes/Prizes'
import { Roulette } from '@/components/Roulette/Roulette'
import { ITEM_WIDTH } from '@/consts'
import { useOverlay } from '@/hooks/useOverlay'
import { useRoulette } from '@/hooks/useRoulette'
import { getPrizes } from '@/services/api'
import type { Prize } from '@/types/api'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: App
})

function App() {
  const {
    data: prizes,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['prizes'],
    queryFn: getPrizes
  })

  const [prize, setPrize] = useState<Prize>()
  const { isVisible, open, close } = useOverlay()

  const { offset, scroll, isSpinning } = useRoulette({
    itemWidth: ITEM_WIDTH,
    itemCount: prizes?.length ?? 0,
    onSpinEnd: open
  })

  const spin = () => {
    if (!prizes) return

    const randomItemIndex = Math.floor(Math.random() * prizes.length)
    setPrize(prizes[randomItemIndex])
    scroll(randomItemIndex)
  }

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-[28px] font-bold'>Good luck!</h1>
      <Roulette offset={offset} isSpinning={isSpinning} />
      {!isError && (
        <Button
          onClick={spin}
          disabled={isSpinning || isLoading}
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
