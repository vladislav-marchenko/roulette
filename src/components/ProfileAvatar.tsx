import { Image } from './Image'
import { getMe } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'

export const ProfileAvatar = () => {
  const { data } = useQuery({
    queryKey: ['me'],
    queryFn: getMe
  })

  return (
    <Link to='/profile' className='h-7 w-7 overflow-hidden rounded-full'>
      <Image src={data?.photoUrl ?? ''} />
    </Link>
  )
}
