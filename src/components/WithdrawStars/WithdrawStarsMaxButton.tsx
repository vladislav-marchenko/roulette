import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const WithdrawStarsMaxButton: FC<{ onClick: () => void }> = ({
  onClick
}) => {
  const { t } = useTranslation()

  return (
    <button
      type='button'
      onClick={onClick}
      className='cursor-pointer p-1 font-medium hover:underline'
    >
      {t('balance.withdraw.buttons.max')}
    </button>
  )
}
