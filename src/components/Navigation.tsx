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
    <nav className='sticky bottom-0 z-10 flex bg-neutral-600/60 backdrop-blur-2xl'>
      {items.map(({ name, href, icon: Icon }) => (
        <Link
          key={href}
          to={href}
          className='flex flex-auto flex-col items-center gap-1 p-3 text-neutral-400 transition-colors duration-300 [.active]:text-white'
        >
          <Icon size={20} />
          <span className='text-xs font-semibold'>{name}</span>
        </Link>
      ))}
    </nav>
  )
}
