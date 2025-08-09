import { SellGift } from '../SellGift'
import { Button } from '@/components/Button'
import type { Prize } from '@/types/api'
import type { FC } from 'react'

interface PrizeOverlayButtonsProps {
  prize: Prize
  close: () => void
}

export const PrizeOverlayButtons: FC<PrizeOverlayButtonsProps> = ({
  prize,
  close
}) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className='mx-auto flex w-full max-w-md flex-col items-center gap-2'
    >
      <SellGift
        name={prize.name}
        price={prize.price}
        image={prize.image}
        lottie={prize.lottie}
      />
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
