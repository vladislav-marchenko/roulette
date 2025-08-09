import { Image } from '@/components/Image'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { getLottie } from '@/services/api'
import type { Prize } from '@/types/api'
import { useQuery } from '@tanstack/react-query'
import Lottie from 'lottie-react'
import type { FC } from 'react'

const className = 'mx-auto max-w-64 rounded-xl bg-neutral-700 p-2'

export const GiftPreview: FC<Pick<Prize, 'name' | 'lottie' | 'image'>> = ({
  name,
  lottie,
  image
}) => {
  const [isAnimationEnabled] = useLocalStorage('giftsAnimation', true)
  const { data, isSuccess } = useQuery({
    queryKey: ['lottie', name],
    queryFn: () => getLottie(lottie),
    enabled: isAnimationEnabled
  })

  if (isSuccess) {
    return <Lottie animationData={data} className={className} />
  }

  return <Image src={image} className={className} />
}
