import { Button } from './Button'
import { Drawer } from './Drawer'
import { GiftPreview } from './GiftPreview'
import { Star } from './Icons'
import type { Gift } from '@/types'
import { cn } from '@/utils'
import type { FC } from 'react'
import { Drawer as DrawerVaul } from 'vaul'

interface SellGiftProps extends Omit<Gift, 'id' | 'image'> {
  className?: string
}

export const SellGift: FC<SellGiftProps> = ({
  name,
  price,
  lottie,
  className
}) => {
  return (
    <Drawer
      title={name}
      description='Are you sure you want to sell this gift?'
      trigger={
        <Button className={cn('flex w-full items-center gap-1', className)}>
          Sell for {price}
          <Star />
        </Button>
      }
      className='flex flex-col gap-4'
    >
      <GiftPreview lottie={lottie} />
      <div className='flex flex-col gap-2'>
        <Button className='flex items-center gap-1'>
          Sell for {price} <Star />
        </Button>
        <DrawerVaul.Close asChild>
          <Button variant='secondary'>Cancel</Button>
        </DrawerVaul.Close>
      </div>
    </Drawer>
  )
}
