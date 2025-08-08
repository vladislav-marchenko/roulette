import { Image } from '@/components/Image'
import { Price } from '@/components/Price'
import type { Gift } from '@/types'
import type { FC } from 'react'

export const PrizesItem: FC<Omit<Gift, 'lottie' | 'id'>> = ({
  image,
  name,
  price
}) => {
  return (
    <li className='group flex items-center gap-2'>
      <Image src={image} className='w-14 rounded-lg bg-neutral-700 p-1' />
      <div className='flex flex-auto flex-col gap-1 border-b border-neutral-700/70 pb-2 group-last:border-none group-last:pb-0'>
        <h3 className='leading-none'>{name}</h3>
        <Price value={price} />
      </div>
    </li>
  )
}
