import { SellGift } from '../SellGift'
import { Button } from '@/components/Button'
import { RouletteContext } from '@/contexts/RouletteContext'
import type { RouletteValues } from '@/types/contexts'
import { useContext } from 'react'

export const PrizeOverlayButtons = () => {
  const {
    overlay: { close },
    demo: { isDemo },
    reward
  } = useContext(RouletteContext) as RouletteValues

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className='mx-auto flex w-full max-w-md flex-col items-center gap-2'
    >
      {!isDemo && reward && (
        <>
          <SellGift onSell={close} reward={reward} />{' '}
          <Button
            to='/gifts'
            variant='secondary'
            onClick={close}
            className='w-full'
          >
            Show in inventory
          </Button>
        </>
      )}
      {isDemo && (
        <Button variant='secondary' onClick={close} className='w-full'>
          Close
        </Button>
      )}
    </div>
  )
}
