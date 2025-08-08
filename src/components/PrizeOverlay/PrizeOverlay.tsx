import { PrizeOverlayButtons } from './PrizeOverlayButtons'
import { PrizeOverlayCloseButton } from './PrizeOverlayCloseButton'
import { PrizeOverlayInfo } from './PrizeOverlayInfo'
import type { Gift } from '@/types'
import type { FC } from 'react'

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
      <PrizeOverlayCloseButton />
      <div className='flex h-full w-full flex-col justify-between'>
        <PrizeOverlayInfo name={prize.name} lottie={prize.lottie} />
        <PrizeOverlayButtons {...prize} close={close} />
      </div>
    </div>
  )
}
