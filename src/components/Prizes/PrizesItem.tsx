import { Image } from '@/components/Image'
import { Price } from '@/components/Price'
import type { Prize } from '@/types/api'
import type { FC } from 'react'

export const PrizesItem: FC<Prize> = ({ image, name, price }) => {
  return (
    <li className='group flex items-start gap-2'>
      <Image src={image} className='icon h-12 w-12' />
      <div className='divider flex flex-auto flex-col gap-1'>
        <h3 className='leading-none'>{name}</h3>
        <Price value={price} />
      </div>
    </li>
  )
}
