import { SettingsButton } from './SettingsButton'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const SettingsToggle: FC<{ localStorageKey: string }> = ({
  localStorageKey
}) => {
  const { t } = useTranslation()
  const [isEnabled, setIsEnabled] = useLocalStorage(localStorageKey, true)

  return (
    <div className='flex items-center gap-2'>
      <SettingsButton isActive={isEnabled} onClick={() => setIsEnabled(true)}>
        {t('profile.settings.options.enable')}
      </SettingsButton>
      <SettingsButton isActive={!isEnabled} onClick={() => setIsEnabled(false)}>
        {t('profile.settings.options.disable')}
      </SettingsButton>
    </div>
  )
}
