import { Button } from './Button'
import { Star } from './Icons'
import type { Gift } from '@/types'
import Lottie from 'lottie-react'
import type { FC } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface PrizeOverlayProps {
  prize: Gift
  close: () => void
}

export const PrizeOverlay: FC<PrizeOverlayProps> = ({ prize, close }) => {
  return (
    <div className='absolute top-0 left-0 z-20 flex h-full w-full items-center justify-center backdrop-blur-md'>
      <button
        onClick={close}
        className='absolute top-4 right-4 z-30 flex cursor-pointer items-center justify-center rounded-full border border-neutral-500/50 bg-neutral-700 p-1 hover:bg-neutral-600'
      >
        <AiOutlineClose size={20} />
      </button>
      <div className='flex flex-col items-center'>
        <Lottie animationData={prize.lottie} className='max-w-48' />
        <h1 className='text-3xl font-bold'>{prize.name}</h1>
        <div className='flex flex-col items-center gap-2 pt-4'>
          <Button className='w-full'>Show in inventory</Button>
          <Button className='flex w-full items-center gap-1'>
            Sell for {prize.price}
            <Star />
          </Button>
        </div>
      </div>
    </div>
  )
}
