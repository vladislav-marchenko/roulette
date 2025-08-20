import { Image } from '@/components/Image'
import { RouletteContext } from '@/contexts/RouletteContext'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { getLottie } from '@/services/api'
import type { Prize } from '@/types/api'
import type { RouletteValues } from '@/types/contexts'
import { useQuery } from '@tanstack/react-query'
import Lottie from 'lottie-react'
import { useContext, type FC } from 'react'
import { useTranslation } from 'react-i18next'

export const PrizeOverlayInfo: FC<Prize> = ({ name, image, lottie }) => {
  const { t } = useTranslation()
  const {
    demo: { isDemo }
  } = useContext(RouletteContext) as RouletteValues
  const [isAnimationEnabled] = useLocalStorage('giftsAnimation', true)

  const { data, isSuccess } = useQuery({
    queryKey: ['lottie', name],
    queryFn: () => getLottie(lottie),
    enabled: isAnimationEnabled
  })

  return (
    <div className='flex flex-auto flex-col items-center justify-center'>
      {isSuccess && <Lottie animationData={data} className='max-w-48' />}
      {!isSuccess && <Image src={image} className='max-w-48' />}
      <h1 className='text-3xl font-bold'>{name}</h1>
      <p className='text-center'>
        {isDemo ? t('prizeOverlay.demoTitle') : t('prizeOverlay.title')}
      </p>
    </div>
  )
}
