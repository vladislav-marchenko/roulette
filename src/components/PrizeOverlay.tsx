import { Star } from './Icons'
import type { Gift } from '@/types'
import type { FC } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface PrizeOverlayProps {
  prize: Gift
  close: () => void
}

export const PrizeOverlay: FC<PrizeOverlayProps> = ({ prize, close }) => {
  return (
    <div className='absolute top-0 left-0 z-20 flex h-full w-full flex-col items-center justify-center backdrop-blur-md'>
      <button
        onClick={close}
        className='absolute top-4 right-4 z-30 flex cursor-pointer items-center justify-center rounded-full border border-neutral-500/50 bg-neutral-700 p-1 hover:bg-neutral-600'
      >
        <AiOutlineClose size={20} />
      </button>
      <img src={prize.image} className='max-w-48' alt={prize.name} />
      <h1 className='text-3xl font-bold'>{prize.name}</h1>
      <div className='flex items-center'>
        <span className='text-lg font-medium'>{prize.price}</span>
        <Star />
      </div>
    </div>
  )
}
