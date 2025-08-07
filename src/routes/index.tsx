import { Balance } from '@/components/Balance'
import { Button } from '@/components/Button'
import { Star } from '@/components/Icons'
import { Image } from '@/components/Image'
import { PrizeOverlay } from '@/components/PrizeOverlay'
import { Prizes } from '@/components/Prizes/Prizes'
import { Roulette } from '@/components/Roulette/Roulette'
import { ITEM_WIDTH } from '@/consts'
import { gifts } from '@/consts'
import { useRoulette } from '@/hooks/useRoulette'
import type { Gift as GiftType } from '@/types'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: App
})

function App() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)
  const [prize, setPrize] = useState<GiftType>()
  const { offset, scroll, isSpinning } = useRoulette({
    itemWidth: ITEM_WIDTH,
    itemCount: gifts.length,
    onSpinEnd: () => setIsOverlayVisible(true)
  })

  const spin = () => {
    const randomItemIndex = Math.floor(Math.random() * gifts.length)
    setPrize(gifts[randomItemIndex])
    scroll(randomItemIndex)
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-1'>
          <Image
            src='https://tailwindcss.com/_next/static/media/cover.de1997f7.png'
            className='w-9 overflow-hidden rounded-full border-2 border-neutral-600/80'
          />
          <span className='text-xs font-bold'>42/250 XP</span>
        </div>
        <Balance />
      </div>
      <h1 className='text-[28px] font-bold'>Good luck!</h1>
      <Roulette offset={offset} isSpinning={isSpinning} />
      <Button
        onClick={spin}
        disabled={isSpinning}
        className='flex items-center gap-1 self-center'
      >
        Spin for 25 <Star />
      </Button>
      <Prizes />
      {isOverlayVisible && prize && (
        <PrizeOverlay prize={prize} close={() => setIsOverlayVisible(false)} />
      )}
    </div>
  )
}
