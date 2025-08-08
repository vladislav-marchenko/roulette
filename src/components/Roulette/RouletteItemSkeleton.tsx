import { Price } from '../Price'
import { ITEM_WIDTH } from '@/consts'

export const RouletteItemSkeleton = () => {
  return (
    <div
      className='flex flex-col items-center justify-center gap-1 rounded-xl border border-neutral-700/50 bg-neutral-800 p-3'
      style={{ width: ITEM_WIDTH + 'px' }}
    >
      <div className='skeleton aspect-square w-3/4 rounded-lg' />
      <Price value={0} className='skeleton' />
    </div>
  )
}
