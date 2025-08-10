import { Image } from '@/components/Image'
import { SellGift } from '@/components/SellGift'
import { WithdrawGift } from '@/components/WithdrawGift'
import type { Reward } from '@/types/api'
import type { FC } from 'react'

export const GiftsItem: FC<Reward> = ({ prize, createdAt, ...reward }) => {
  const { name, image, lottie } = prize

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
        <SellGift triggerSize='sm' rewardId={reward._id} prize={prize} />
        <WithdrawGift name={name} lottie={lottie} image={image} />
      </div>
    </div>
  )
}
