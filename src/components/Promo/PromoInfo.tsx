import { useTranslation } from 'react-i18next'

export const PromoInfo = () => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col'>
      <h2>{t('profile.promo.title')}</h2>
      <p className='text-sm text-neutral-400'>
        {t('profile.promo.description')}
      </p>
    </div>
  )
}
