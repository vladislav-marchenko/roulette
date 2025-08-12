import { Image } from './Image'
import { getMe } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import WebApp from '@twa-dev/sdk'

export const ProfileAvatar = () => {
  const { data } = useQuery({
    queryKey: ['me'],
    queryFn: getMe
  })

  return (
    <Link
      to='/profile'
      onClick={() => WebApp.HapticFeedback.impactOccurred('soft')}
      className='h-7 w-7 overflow-hidden rounded-full'
    >
      <Image src={data?.photoUrl} />
    </Link>
  )
}
