import { PrizeOverlayButtons } from './PrizeOverlayButtons'
import { PrizeOverlayInfo } from './PrizeOverlayInfo'
import { Button } from '@/components/Button'
import { RouletteContext } from '@/contexts/RouletteContext'
import type { RouletteValues } from '@/types/contexts'
import WebApp from '@twa-dev/sdk'
import { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export const PrizeOverlay = () => {
  const {
    overlay: { isVisible, close },
    reward
  } = useContext(RouletteContext) as RouletteValues

  if (!reward || !isVisible) return

  const paddingTop =
    WebApp.safeAreaInset.top > 0 ? WebApp.safeAreaInset.top + 46 : 16
  const paddingBottom =
    WebApp.safeAreaInset.bottom > 0 ? WebApp.safeAreaInset.bottom : 16

  return (
    <div
      onClick={close}
      className='fixed top-0 left-0 z-20 flex h-full w-full flex-col items-center justify-center bg-neutral-800/50 p-4 backdrop-blur-md'
      style={{
        paddingTop: paddingTop + 'px',
        paddingBottom: paddingBottom + 'px'
      }}
    >
      <Button variant='secondary' className='z-30 self-end rounded-full p-2'>
        <AiOutlineClose size={20} />
      </Button>
      <div className='flex h-full w-full flex-col justify-between'>
        <PrizeOverlayInfo {...reward.prize} />
        <PrizeOverlayButtons />
      </div>
    </div>
  )
}
