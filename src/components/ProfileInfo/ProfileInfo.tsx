import { ProfileInfoContent } from './ProfileInfoContent'
import { ProfileInfoSkeleton } from './ProfileInfoSkeleton'
import { Error } from '@/components/Error'
import { getMe } from '@/services/api'
import { useQuery } from '@tanstack/react-query'

export const ProfileInfo = () => {
  const { data, isLoading, isSuccess, isError, error, refetch } = useQuery({
    queryKey: ['me'],
    queryFn: getMe
  })

  return (
    <div className='flex flex-col items-center gap-2 self-center'>
      {isLoading && <ProfileInfoSkeleton />}
      {isSuccess && <ProfileInfoContent {...data} />}
      {isError && <Error error={error} refetch={refetch} />}
    </div>
  )
}
