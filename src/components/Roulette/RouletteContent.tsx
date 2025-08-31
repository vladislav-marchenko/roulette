import { RouletteBlackout } from './RouletteBlackout'
import { RouletteItems } from './RouletteItems'
import { RouletteItemsSkeleton } from './RouletteItemsSkeleton'
import { ITEM_WIDTH, REPEAT_COUNT } from '@/consts'
import { RouletteContext } from '@/contexts/RouletteContext'
import { getRoulette } from '@/services/api'
import type { RouletteValues } from '@/types/contexts'
import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'
import { useContext } from 'react'

export const RouletteContent = () => {
  const {
    roulette: { offset, isSpinning }
  } = useContext(RouletteContext) as RouletteValues

  const { id } = useParams({ from: '/roulettes/$id' })
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['roulette', id],
    queryFn: () => getRoulette(id),
    enabled: !!id
  })

  const prizesCount = data?.prizes.length ?? 20

  return (
    <div className='relative w-full overflow-hidden rounded-lg'>
      <RouletteBlackout />
      <div className='absolute top-0 bottom-0 left-1/2 z-10 w-[3px] -translate-x-1/2 bg-neutral-200/70' />
      <div
        className='flex gap-2'
        style={{
          width: prizesCount * ITEM_WIDTH * REPEAT_COUNT + 'px',
          transform: `translateX(-${offset}px)`,
          transition: isSpinning ? 'none' : 'transform 0.1s ease-out'
        }}
      >
        {isSuccess && <RouletteItems prizes={data.prizes} />}
        {isLoading && <RouletteItemsSkeleton />}
      </div>
    </div>
  )
}
