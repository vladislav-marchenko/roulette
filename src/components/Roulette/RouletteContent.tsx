import { RouletteBlackout } from './RouletteBlackout'
import { RouletteItems } from './RouletteItems'
import { RouletteItemsSkeleton } from './RouletteItemsSkeleton'
import { ITEM_WIDTH, REPEAT_COUNT } from '@/consts'
import { getPrizes } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import type { FC } from 'react'

interface RouletteContentProps {
  isSpinning: boolean
  offset: number
}

export const RouletteContent: FC<RouletteContentProps> = ({
  offset,
  isSpinning
}) => {
  const {
    data = Array.from({ length: 10 }),
    isLoading,
    isSuccess
  } = useQuery({
    queryKey: ['prizes'],
    queryFn: getPrizes
  })

  return (
    <div className='relative w-full overflow-hidden rounded-lg'>
      <RouletteBlackout />
      <div className='absolute top-0 bottom-0 left-1/2 z-10 w-[3px] -translate-x-1/2 bg-neutral-200/70' />
      <div
        className='flex gap-2'
        style={{
          width: data.length * ITEM_WIDTH * REPEAT_COUNT + 'px',
          transform: `translateX(-${offset}px)`,
          transition: isSpinning ? 'none' : 'transform 0.1s ease-out'
        }}
      >
        {isSuccess && <RouletteItems prizes={data} />}
        {isLoading && <RouletteItemsSkeleton />}
      </div>
    </div>
  )
}
