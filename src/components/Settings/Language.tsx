import { SettingsButton } from './SettingsButton'
import { Russia, UnitedStates, China } from '@/components/Icons'
import { useTranslation } from 'react-i18next'

export const languages = [
  {
    code: 'en',
    label: 'EN',
    icon: UnitedStates
  },
  {
    code: 'ru',
    label: 'РУ',
    icon: Russia
  },
  {
    code: 'zh',
    label: '中文',
    icon: China
  }
]

export const Language = () => {
  const { i18n } = useTranslation()

  return (
    <ul className='flex items-center gap-2'>
      {languages.map(({ code, label, icon: Icon }) => (
        <li key={code}>
          <SettingsButton
            onClick={() => i18n.changeLanguage(code)}
            isActive={code === i18n.language}
            className='flex items-center gap-2'
          >
            <Icon />
            {label}
          </SettingsButton>
        </li>
      ))}
    </ul>
  )
}
