import { Button } from '@/components/Button'
import { Sell } from '@/components/Sell'
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
      className='flex flex-col items-center gap-2'
    >
      <Button to='/gifts' onClick={close} className='w-full'>
        Show in inventory
      </Button>
      <Sell {...props} />
    </div>
  )
}
