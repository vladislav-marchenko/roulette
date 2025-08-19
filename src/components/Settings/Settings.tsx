import { Language } from './Language'
import { SettingsButtons } from './SettingsButtons'
import { SettingsToggle } from './SettingsToggle'
import { Button } from '@/components/Button'
import { Drawer } from '@/components/Drawer'
import { useTranslation } from 'react-i18next'
import { FaGear } from 'react-icons/fa6'

export const settings = [
  {
    labelKey: 'profile.settings.language',
    element: <Language />
  },
  {
    labelKey: 'profile.settings.animation',
    element: <SettingsToggle localStorageKey='giftsAnimation' />
  },
  {
    labelKey: 'profile.settings.switch',
    element: <SettingsToggle localStorageKey='demoModeSwitch' />
  }
]

export const Settings = () => {
  const { t } = useTranslation()

  return (
    <Drawer
      title={t('profile.settings.title')}
      trigger={
        <Button
          variant='secondary'
          className='rounded-full p-2.5 text-neutral-400 hover:text-white'
        >
          <FaGear size={14} />
        </Button>
      }
      className='flex flex-col gap-4'
    >
      {settings.map(({ labelKey, element }) => (
        <div key={labelKey} className='flex flex-col gap-2'>
          <h5>{t(labelKey)}</h5>
          {element}
        </div>
      ))}
      <SettingsButtons />
    </Drawer>
  )
}
