import { Image } from '@/components/Image'
import { Price } from '@/components/Price'
import type { Prize } from '@/types/api'
import type { FC } from 'react'

export const PrizesItem: FC<Omit<Prize, 'lottie' | 'id'>> = ({
  image,
  name,
  price
}) => {
  return (
    <li className='group flex items-center gap-2'>
      <Image src={image} className='w-14 rounded-lg bg-neutral-700 p-1' />
      <div className='divider flex flex-auto flex-col gap-1'>
        <h3 className='leading-none'>{name}</h3>
        <Price value={price} />
      </div>
    </li>
  )
}
