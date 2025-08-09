import { Price } from '../Price'
import { Image } from '@/components/Image'
import { ITEM_WIDTH } from '@/consts'
import type { Prize } from '@/types/api'
import { type FC } from 'react'

export const RouletteItem: FC<Pick<Prize, 'image' | 'price'>> = ({
  image,
  price
}) => {
  return (
    <div
      className='flex flex-col items-center justify-center gap-1 rounded-xl border border-neutral-700/50 bg-neutral-800 p-3'
      style={{ width: ITEM_WIDTH + 'px' }}
    >
      <Image src={image} className='w-3/4' />
      <Price value={price} />
    </div>
  )
}
