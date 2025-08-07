import { Price } from '../Price'
import { Image } from '@/components/Image'
import { ITEM_WIDTH } from '@/consts'
import type { Gift } from '@/types'
import { type FC } from 'react'

export const RouletteItem: FC<Gift> = ({ image, price }) => {
  return (
    <div
      className='flex flex-col items-center justify-center gap-1 rounded-lg bg-neutral-800 p-3'
      style={{ width: ITEM_WIDTH + 'px' }}
    >
      <Image src={image} className='w-3/4' />
      <Price value={price} />
    </div>
  )
}
