import { Button } from './Button'
import { Drawer } from './Drawer'
import { GiftPreview } from './GiftPreview'
import type { Gift } from '@/types'
import type { FC } from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'
import { Drawer as DrawerVaul } from 'vaul'

export const WithdrawGift: FC<Pick<Gift, 'name' | 'lottie'>> = ({
  name,
  lottie
}) => {
  return (
    <Drawer
      title={name}
      description='Are you sure you want to withdraw this gift?'
      trigger={
        <Button variant='secondary' className='rounded-full p-2.5'>
          <FaArrowUpLong size={13} />
        </Button>
      }
      className='flex flex-col gap-4'
    >
      <GiftPreview lottie={lottie} />
      <div className='flex flex-col gap-2'>
        <Button className='flex items-center gap-1'>Withdraw</Button>
        <DrawerVaul.Close asChild>
          <Button variant='secondary'>Cancel</Button>
        </DrawerVaul.Close>
      </div>
    </Drawer>
  )
}
