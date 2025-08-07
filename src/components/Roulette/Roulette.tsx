import { RouletteBlackout } from './RouletteBlackout'
import { RouletteItem } from './RouletteItem'
import { ITEM_WIDTH, gifts, REPEAT_COUNT } from '@/consts'
import type { Gift } from '@/types'
import type { FC } from 'react'

interface RouletteProps {
  offset: number
  isSpinning: boolean
}

export const Roulette: FC<RouletteProps> = ({ offset, isSpinning }) => {
  return (
    <div className='relative w-full overflow-hidden rounded-lg'>
      <RouletteBlackout />
      <div className='absolute top-0 bottom-0 left-1/2 z-10 w-[3px] -translate-x-1/2 bg-neutral-200/70' />
      <div
        className='flex gap-2'
        style={{
          width: gifts.length * ITEM_WIDTH * REPEAT_COUNT + 'px',
          transform: `translateX(-${offset}px)`,
          transition: isSpinning ? 'none' : 'transform 0.1s ease-out'
        }}
      >
        {Array(REPEAT_COUNT)
          .fill(gifts)
          .flat()
          .map((gift: Gift, index) => (
            <RouletteItem key={index} {...gift} />
          ))}
      </div>
    </div>
  )
}
