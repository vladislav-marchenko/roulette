import { Button } from '../Button'
import { GiftPreview } from '../GiftPreview'
import { Star } from '../Icons'
import { Drawer } from '@/components/Drawer'
import { Image } from '@/components/Image'
import { Price } from '@/components/Price'
import type { Gift } from '@/types'
import type { FC } from 'react'

export const GiftsItem: FC<Omit<Gift, 'id'>> = ({
  name,
  image,
  price,
  lottie
}) => {
  return (
    <Drawer
      title={name}
      trigger={
        <button className='cursor-pointer rounded-xl bg-neutral-800 p-1.5'>
          <Image src={image} className='w-full rounded-xl bg-neutral-700 p-2' />
          <h4 className='text-start'>{name}</h4>
          <Price value={price} />
        </button>
      }
      className='flex flex-col gap-4'
    >
      <GiftPreview lottie={lottie} />
      <div className='flex w-full flex-col gap-2'>
        <Button>Withdraw</Button>
        <Button variant='secondary' className='flex items-center gap-1'>
          Sell for {price} <Star />
        </Button>
      </div>
    </Drawer>
  )
}
