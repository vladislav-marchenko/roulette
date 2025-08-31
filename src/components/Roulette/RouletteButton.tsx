import { Button } from '@/components/Button'
import { Star } from '@/components/Icons'
import { RouletteContext } from '@/contexts/RouletteContext'
import { getRoulette } from '@/services/api'
import type { RouletteValues } from '@/types/contexts'
import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

export const RouletteButton = () => {
  const { t } = useTranslation()
  const { id } = useParams({ from: '/roulettes/$id' })

  const {
    roulette: { isSpinning },
    spin: { mutate: spin, isPending },
    demo: { isDemo, spin: demoSpin }
  } = useContext(RouletteContext) as RouletteValues

  const { data, isLoading, isError } = useQuery({
    queryKey: ['roulette', id],
    queryFn: () => getRoulette(id),
    enabled: !!id
  })

  if (isError) return

  const handleClick = () => {
    if (isDemo) demoSpin()
    else spin()
  }

  return (
    <Button
      onClick={handleClick}
      disabled={isSpinning || isLoading}
      isLoading={isPending}
      className='w-full max-w-xs self-center'
    >
      {isDemo && t('play.demo.title')}
      {!isDemo && (
        <div className='flex items-center gap-1'>
          {t('play.button', { amount: data?.price ?? '???' })} <Star />
        </div>
      )}
    </Button>
  )
}
