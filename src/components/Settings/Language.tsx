import { SettingsButton } from './SettingsButton'
import { Russia, UnitedStates } from '@/components/Icons'

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
  }
]

export const Language = () => {
  return (
    <ul className='flex items-center gap-2'>
      {languages.map(({ code, label, icon: Icon }) => (
        <li key={code}>
          <SettingsButton className='flex items-center gap-2'>
            <Icon />
            {label}
          </SettingsButton>
        </li>
      ))}
    </ul>
  )
}
