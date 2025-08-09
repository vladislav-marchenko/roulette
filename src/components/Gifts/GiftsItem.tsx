import { SellGift } from '../SellGift'
import { WithdrawGift } from '../WithdrawGift'
import { Image } from '@/components/Image'
import type { Prize } from '@/types/api'
import type { FC } from 'react'

interface GiftsItemProps extends Omit<Prize, 'key'> {
  createdAt: string
}

export const GiftsItem: FC<GiftsItemProps> = ({
  name,
  image,
  price,
  lottie,
  createdAt
}) => {
  const date = new Date(createdAt).toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  })

  return (
    <div className='flex flex-col gap-2 rounded-xl bg-neutral-800 p-1.5'>
      <Image src={image} className='w-full rounded-xl bg-neutral-700 p-2' />
      <div className='flex flex-col'>
        <h4 className='leading-none'>{name}</h4>
        <span className='text-xs font-medium text-neutral-400'>{date}</span>
      </div>
      <div className='flex items-center gap-2'>
        <SellGift
          triggerSize='sm'
          name={name}
          price={price}
          lottie={lottie}
          image={image}
        />
        <WithdrawGift name={name} lottie={lottie} image={image} />
      </div>
    </div>
  )
}
