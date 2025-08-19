import { Link } from '@tanstack/react-router'
import WebApp from '@twa-dev/sdk'
import { useTranslation } from 'react-i18next'
import { FaDiceFive, FaGift, FaCircleUser } from 'react-icons/fa6'

const items = [
  {
    nameKey: 'navigation.inventory',
    href: '/gifts',
    icon: FaGift
  },
  {
    nameKey: 'navigation.play',
    href: '/',
    icon: FaDiceFive
  },
  {
    nameKey: 'navigation.profile',
    href: '/profile',
    icon: FaCircleUser
  }
]

export const Navigation = () => {
  const { t } = useTranslation()

  return (
    <nav
      className='sticky bottom-0 z-10 mx-auto flex w-full bg-neutral-600/40 shadow-2xl backdrop-blur-xl md:bottom-2 md:max-w-md md:rounded-2xl md:border md:border-neutral-600'
      style={{
        paddingBottom: WebApp.safeAreaInset.bottom + 'px'
      }}
    >
      {items.map(({ nameKey, href, icon: Icon }) => (
        <Link
          key={href}
          to={href}
          onClick={() => WebApp.HapticFeedback.impactOccurred('soft')}
          className='flex flex-auto flex-col items-center gap-1 p-3 text-neutral-400 md:p-2.5 [.active]:text-white'
        >
          <Icon size={24} />
          <span className='text-xs font-semibold'>{t(nameKey)}</span>
        </Link>
      ))}
    </nav>
  )
}
