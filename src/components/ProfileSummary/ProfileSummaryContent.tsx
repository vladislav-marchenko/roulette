import { Image } from '@/components/Image'
import type { User } from '@/types/api'
import { Link } from '@tanstack/react-router'
import type { FC } from 'react'

export const ProfileSummaryContent: FC<User> = ({ photoUrl }) => {
  return (
    <Link to='/profile' className='flex items-center gap-1'>
      <Image
        src={photoUrl}
        className='w-7 overflow-hidden rounded-full border-2 border-neutral-600/80'
      />
      <span className='text-xs font-bold'>42/250 XP</span>
    </Link>
  )
}
