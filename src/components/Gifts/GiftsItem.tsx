import { SellGift } from '../SellGift'
import { WithdrawGift } from '../WithdrawGift'
import { Image } from '@/components/Image'
import type { Gift } from '@/types'
import type { FC } from 'react'

export const GiftsItem: FC<Omit<Gift, 'id'>> = ({
  name,
  image,
  price,
  lottie
}) => {
  return (
    <div className='flex flex-col gap-1 rounded-xl bg-neutral-800 p-1.5'>
      <Image src={image} className='w-full rounded-xl bg-neutral-700 p-2' />
      <h4 className='text-start'>{name}</h4>
      <div className='flex items-center gap-2'>
        <SellGift
          name={name}
          price={price}
          lottie={lottie}
          image={image}
          className='rounded-full px-2 py-1.5 text-sm whitespace-nowrap'
        />
        <WithdrawGift name={name} lottie={lottie} image={image} />
      </div>
    </div>
  )
}
