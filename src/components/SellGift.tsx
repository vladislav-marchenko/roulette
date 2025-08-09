import { Button, type ButtonProps } from './Button'
import { Drawer } from './Drawer'
import { GiftPreview } from './GiftPreview'
import { Star } from './Icons'
import type { Prize } from '@/types/api'
import { cn } from '@/utils'
import type { FC } from 'react'
import { Drawer as DrawerVaul } from 'vaul'

interface SellGiftProps extends Omit<Prize, '_id' | 'key'> {
  className?: string
  triggerSize?: ButtonProps['size']
}

export const SellGift: FC<SellGiftProps> = ({
  name,
  price,
  lottie,
  image,
  className,
  triggerSize
}) => {
  return (
    <Drawer
      title={name}
      description='Are you sure you want to sell this gift?'
      trigger={
        <Button
          size={triggerSize}
          className={cn('flex w-full items-center gap-1', className)}
        >
          Sell for {price}
          <Star />
        </Button>
      }
      className='flex flex-col gap-4'
    >
      <GiftPreview lottie={lottie} image={image} />
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
