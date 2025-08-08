import { PrizeOverlayButtons } from './PrizeOverlayButtons'
import { PrizeOverlayInfo } from './PrizeOverlayInfo'
import { Button } from '@/components/Button'
import type { Gift } from '@/types'
import type { FC } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface PrizeOverlayProps {
  prize: Gift
  close: () => void
}

export const PrizeOverlay: FC<PrizeOverlayProps> = ({ prize, close }) => {
  return (
    <div
      onClick={close}
      className='fixed top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-neutral-800/50 p-4 backdrop-blur-md'
    >
      <Button
        variant='secondary'
        className='absolute top-4 right-4 z-30 rounded-full p-2'
      >
        <AiOutlineClose size={20} />
      </Button>
      <div className='flex h-full w-full flex-col justify-between'>
        <PrizeOverlayInfo {...prize} />
        <PrizeOverlayButtons {...prize} close={close} />
      </div>
    </div>
  )
}
