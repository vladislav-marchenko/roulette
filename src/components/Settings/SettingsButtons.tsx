import { Button } from '@/components/Button'
import { useTranslation } from 'react-i18next'

export const SettingsButtons = () => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-wrap gap-2'>
      <Button
        href='https://t.me/giftica_official'
        variant='secondary'
        className='flex-auto whitespace-nowrap'
      >
        {t('profile.settings.buttons.community')}
      </Button>
      <Button
        href='https://t.me/giftica_support'
        className='flex-auto whitespace-nowrap'
      >
        {t('profile.settings.buttons.support')}
      </Button>
    </div>
  )
}
