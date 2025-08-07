import { Star } from '../Icons'
import { RouletteItemImage } from './RouletteItemImage'
import { ITEM_WIDTH } from '@/consts'
import type { Gift } from '@/types'
import { type FC } from 'react'

export const RouletteItem: FC<Gift> = ({ image, price }) => {
  return (
    <div
      className='flex flex-col items-center justify-center gap-1 rounded-lg bg-neutral-800 p-3'
      style={{ width: ITEM_WIDTH + 'px' }}
    >
      <RouletteItemImage src={image} />
      <div className='flex items-center gap-1 rounded-full bg-neutral-500/50 px-2 py-1'>
        <span className='text-xs leading-tight font-bold text-neutral-200'>
          {price}
        </span>
        <Star size={12} />
      </div>
    </div>
  )
}
