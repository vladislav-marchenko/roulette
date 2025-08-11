import { Image } from '@/components/Image'
import type { User } from '@/types/api'
import type { FC } from 'react'

export const ProfileInfoContent: FC<User> = ({ username, photoUrl }) => {
  return (
    <>
      <Image src={photoUrl} className='w-26 overflow-hidden rounded-full' />
      <h3 className='leading-none'>{username}</h3>
    </>
  )
}
