import { SellGift } from '../SellGift'
import { Button } from '@/components/Button'
import type { Reward } from '@/types/api'
import type { FC } from 'react'

interface PrizeOverlayButtonsProps {
  reward: Reward
  close: () => void
}

export const PrizeOverlayButtons: FC<PrizeOverlayButtonsProps> = ({
  reward,
  close
}) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className='mx-auto flex w-full max-w-md flex-col items-center gap-2'
    >
      <SellGift rewardId={reward._id} prize={reward.prize} onSell={close} />
      <Button
        to='/gifts'
        variant='secondary'
        onClick={close}
        className='w-full'
      >
        Show in inventory
      </Button>
    </div>
  )
}
