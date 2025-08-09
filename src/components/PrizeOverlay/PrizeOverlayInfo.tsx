import { Image } from '@/components/Image'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { getLottie } from '@/services/api'
import type { Prize } from '@/types/api'
import { useQuery } from '@tanstack/react-query'
import Lottie from 'lottie-react'
import type { FC } from 'react'

export const PrizeOverlayInfo: FC<Prize> = ({ name, lottie, image }) => {
  const [isAnimationEnabled] = useLocalStorage('giftsAnimation', true)
  const { data, isSuccess } = useQuery({
    queryKey: ['lottie', name],
    queryFn: () => getLottie(lottie)
  })

  return (
    <div className='flex flex-auto flex-col items-center justify-center'>
      {isAnimationEnabled && isSuccess ? (
        <Lottie animationData={data} className='max-w-48' />
      ) : (
        <Image src={image} className='max-w-48' />
      )}
      <h1 className='text-3xl font-bold'>{name}</h1>
      <p className='text-center'>You have won a gift!</p>
    </div>
  )
}
