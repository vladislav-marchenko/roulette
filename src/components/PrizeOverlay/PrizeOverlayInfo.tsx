import Lottie from 'lottie-react'
import type { FC } from 'react'

interface PrizeOverlayInfoProps {
  name: string
  lottie: unknown
}

export const PrizeOverlayInfo: FC<PrizeOverlayInfoProps> = ({
  name,
  lottie
}) => {
  return (
    <div className='flex flex-auto flex-col items-center justify-center'>
      <Lottie animationData={lottie} className='max-w-48' />
      <h1 className='text-3xl font-bold'>{name}</h1>
      <p className='text-center'>You have won a gift!</p>
    </div>
  )
}
