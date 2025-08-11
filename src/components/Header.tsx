import { Balance } from './Balance'
import { ProfileAvatar } from './ProfileAvatar'
import { Settings } from './Settings/Settings'
import { useLocation } from '@tanstack/react-router'

export const Header = () => {
  const { pathname } = useLocation()

  return (
    <header className='flex items-center justify-between'>
      {pathname === '/profile' && <Settings />}
      {pathname !== '/profile' && <ProfileAvatar />}
      <Balance />
    </header>
  )
}
