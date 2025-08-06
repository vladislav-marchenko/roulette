import { RouletteBlackout } from './RouletteBlackout'
import { RouletteItem } from './RouletteItem'
import { ITEM_WIDTH, REPEAT_COUNT } from '@/consts'
import type { Gift } from '@/types'
import type { FC } from 'react'

interface RouletteProps {
  items: Gift[]
  offset: number
  isSpinning: boolean
}

export const Roulette: FC<RouletteProps> = ({ items, offset, isSpinning }) => {
  return (
    <div className='relative w-full overflow-hidden rounded-lg bg-neutral-950 p-2'>
      <RouletteBlackout />
      <div className='absolute top-0 bottom-0 left-1/2 z-10 w-[3px] -translate-x-1/2 bg-neutral-200/70' />
      <div
        className='flex gap-2'
        style={{
          width: items.length * ITEM_WIDTH * REPEAT_COUNT + 'px',
          transform: `translateX(-${offset}px)`,
          transition: isSpinning ? 'none' : 'transform 0.1s ease-out'
        }}
      >
        {Array(REPEAT_COUNT)
          .fill(items)
          .flat()
          .map((gift: Gift, index) => (
            <RouletteItem key={index} {...gift} />
          ))}
      </div>
    </div>
  )
}
