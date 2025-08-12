import { Link } from '@tanstack/react-router'
import WebApp from '@twa-dev/sdk'
import { FaDiceFive, FaGift, FaCircleUser } from 'react-icons/fa6'

const items = [
  {
    name: 'My gifts',
    href: '/gifts',
    icon: FaGift
  },
  {
    name: 'Play',
    href: '/',
    icon: FaDiceFive
  },
  {
    name: 'Profile',
    href: '/profile',
    icon: FaCircleUser
  }
]

export const Navigation = () => {
  return (
    <nav
      className='sticky bottom-0 z-10 flex bg-neutral-800/60 backdrop-blur-2xl'
      style={{
        paddingBottom: WebApp.safeAreaInset.bottom + 'px'
      }}
    >
      {items.map(({ name, href, icon: Icon }) => (
        <Link
          key={href}
          to={href}
          onClick={() => WebApp.HapticFeedback.impactOccurred('soft')}
          className='flex flex-auto flex-col items-center gap-1 p-3 text-neutral-400 [.active]:text-white'
        >
          <Icon size={24} />
          <span className='text-xs font-semibold'>{name}</span>
        </Link>
      ))}
    </nav>
  )
}
