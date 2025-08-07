import { Link } from '@tanstack/react-router'
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
    <nav className='sticky bottom-0 z-10 flex bg-neutral-700/40 backdrop-blur-md'>
      {items.map(({ name, href, icon: Icon }) => (
        <Link
          key={href}
          to={href}
          className='flex flex-auto flex-col items-center gap-1 p-3 text-neutral-400 transition-colors duration-300 [.active]:text-white'
        >
          <Icon size={24} />
          <span className='text-xs font-semibold'>{name}</span>
        </Link>
      ))}
    </nav>
  )
}
