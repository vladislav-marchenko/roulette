import { Image } from './Image'
import { Link } from '@tanstack/react-router'

export const ProfileSummary = () => {
  return (
    <Link to='/profile' className='flex items-center gap-1'>
      <Image
        src='https://tailwindcss.com/_next/static/media/cover.de1997f7.png'
        className='w-9 overflow-hidden rounded-full border-2 border-neutral-600/80'
      />
      <span className='text-xs font-bold'>42/250 XP</span>
    </Link>
  )
}
