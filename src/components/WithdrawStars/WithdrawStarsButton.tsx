import { Button } from '@/components/Button'
import { Star } from '@/components/Icons'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface WithdrawStarsButtonProps {
  disabled: boolean
  isPending: boolean
  value: number
}

export const WithdrawStarsButton: FC<WithdrawStarsButtonProps> = ({
  disabled,
  isPending,
  value
}) => {
  const { t } = useTranslation()

  return (
    <Button
      type='submit'
      disabled={disabled}
      isLoading={isPending}
      className='w-full'
    >
      <div className='flex flex-col items-center gap-0.5'>
        <span className='leading-none'>
          {t('balance.withdraw.buttons.main.title')}
        </span>
        <div className='flex items-center gap-0.5 text-xs leading-none text-neutral-400'>
          {t('balance.withdraw.buttons.main.subtitle', {
            amount: Math.floor(value * 0.9)
          })}
          <Star size={11} />
        </div>
      </div>
    </Button>
  )
}
