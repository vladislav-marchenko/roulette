import { Button } from '@/components/Button'
import { Star } from '@/components/Icons'
import { RouletteContext } from '@/contexts/RouletteContext'
import type { RouletteValues } from '@/types/contexts'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

export const RouletteButton = () => {
  const { t } = useTranslation()
  const {
    roulette: { isSpinning },
    prizes: { isLoading, isError },
    spin: { mutate: spin, isPending },
    demo: { isDemo, spin: demoSpin }
  } = useContext(RouletteContext) as RouletteValues

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
      className='flex w-full max-w-xs items-center gap-1 self-center'
    >
      {isDemo && t('play.demo.title')}
      {!isDemo && (
        <>
          {t('play.button', { amount: 25 })} <Star />
        </>
      )}
    </Button>
  )
}
