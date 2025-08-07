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
    <li className='flex items-center gap-2'>
      <Image src={image} className='w-12 rounded-lg bg-neutral-700 p-1' />
      <div className='flex flex-col'>
        <h3>{name}</h3>
        <Price value={price} />
      </div>
    </li>
  )
}
