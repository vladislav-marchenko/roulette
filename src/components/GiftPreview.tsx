import { Image } from '@/components/Image'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import type { Gift } from '@/types'
import Lottie from 'lottie-react'
import type { FC } from 'react'

const className = 'mx-auto max-w-64 rounded-xl bg-neutral-700 p-2'

export const GiftPreview: FC<Pick<Gift, 'lottie' | 'image'>> = ({
  lottie,
  image
}) => {
  const [isAnimationEnabled] = useLocalStorage('giftsAnimation', true)
  console.log(isAnimationEnabled)

  if (!isAnimationEnabled) {
    return <Image src={image} className={className} />
  }

  return <Lottie animationData={lottie} className={className} />
}
