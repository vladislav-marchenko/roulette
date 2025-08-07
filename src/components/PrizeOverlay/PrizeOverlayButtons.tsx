import { Button } from '../Button'
import { Star } from '../Icons'
import type { FC } from 'react'

export const PrizeOverlayButtons: FC<{ price: number }> = ({ price }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className='flex flex-col items-center gap-2'
    >
      <Button to='/gifts' className='w-full'>
        Show in inventory
      </Button>
      <Button variant='secondary' className='flex w-full items-center gap-1'>
        Sell for {price}
        <Star />
      </Button>
    </div>
  )
}
