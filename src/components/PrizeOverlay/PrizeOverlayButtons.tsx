import { SellGift } from '../SellGift'
import { Button } from '@/components/Button'
import type { Gift } from '@/types'
import type { FC } from 'react'

interface PrizeOverlayButtonsProps extends Gift {
  close: () => void
}

export const PrizeOverlayButtons: FC<PrizeOverlayButtonsProps> = ({
  close,
  ...props
}) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className='mx-auto flex w-full max-w-md flex-col items-center gap-2'
    >
      <SellGift {...props} />
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
