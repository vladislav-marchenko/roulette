import { Image } from '@/components/Image'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import type { Gift } from '@/types'
import Lottie from 'lottie-react'
import type { FC } from 'react'

export const PrizeOverlayInfo: FC<Gift> = ({ name, lottie, image }) => {
  const [isAnimationEnabled] = useLocalStorage('giftsAnimation', true)

  return (
    <div className='flex flex-auto flex-col items-center justify-center'>
      {isAnimationEnabled && (
        <Lottie animationData={lottie} className='max-w-48' />
      )}
      {!isAnimationEnabled && <Image src={image} className='max-w-48' />}
      <h1 className='text-3xl font-bold'>{name}</h1>
      <p className='text-center'>You have won a gift!</p>
    </div>
  )
}
