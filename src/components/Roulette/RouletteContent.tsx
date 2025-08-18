import { RouletteBlackout } from './RouletteBlackout'
import { RouletteItems } from './RouletteItems'
import { RouletteItemsSkeleton } from './RouletteItemsSkeleton'
import { ITEM_WIDTH, REPEAT_COUNT } from '@/consts'
import { RouletteContext } from '@/contexts/RouletteContext'
import type { RouletteValues } from '@/types/contexts'
import { useContext } from 'react'

export const RouletteContent = () => {
  const {
    prizes: { items = Array.from({ length: 10 }), isSuccess, isLoading },
    roulette: { offset, isSpinning }
  } = useContext(RouletteContext) as RouletteValues

  return (
    <div className='relative w-full overflow-hidden rounded-lg'>
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
        {isSuccess && <RouletteItems prizes={items} />}
        {isLoading && <RouletteItemsSkeleton />}
      </div>
    </div>
  )
}
