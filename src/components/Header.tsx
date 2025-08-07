import { Balance } from './Balance'
import { ProfileSummary } from './ProfileSummary'
import { SettingsButton } from './SettingsButton'
import { useLocation } from '@tanstack/react-router'

export const Header = () => {
  const { pathname } = useLocation()

  return (
    <header className='flex items-center justify-between'>
      {pathname === '/profile' && <SettingsButton />}
      {pathname !== '/profile' && <ProfileSummary />}
      <Balance />
    </header>
  )
}
