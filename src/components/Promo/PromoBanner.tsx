import WebApp from '@twa-dev/sdk'
import type { ButtonHTMLAttributes, FC } from 'react'
import { useTranslation } from 'react-i18next'

export const PromoBanner: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  ...props
}) => {
  const { t } = useTranslation()

  return (
    <button
      {...props}
      onClick={(event) => {
        WebApp.HapticFeedback.impactOccurred('soft')
        onClick && onClick(event)
      }}
      className='flex-auto cursor-pointer rounded-xl bg-gradient-to-tr from-neutral-700 from-60% to-amber-500 p-px'
    >
      <div className='flex flex-auto cursor-pointer flex-col items-start rounded-xl bg-neutral-700 bg-[url("./assets/promocodes-background.png")] bg-cover p-3'>
        <h5>{t('profile.promo.banner.title')}</h5>
        <p className='w-full pt-1 pb-4 text-start text-xs font-semibold'>
          {t('profile.promo.banner.description')}
        </p>
        <div className='rounded-md bg-white px-2 py-1.5 text-xs font-bold text-black shadow-2xl'>
          {t('profile.promo.banner.button')}
        </div>
      </div>
    </button>
  )
}
