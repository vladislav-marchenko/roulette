import { ProfileSummaryContent } from './ProfileSummaryContent'
import { ProfileSummarySkeleton } from './ProfileSummarySkeleton'
import { getMe } from '@/services/api'
import { useQuery } from '@tanstack/react-query'

export const ProfileSummary = () => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['me'],
    queryFn: getMe
  })

  if (isLoading || isError) return <ProfileSummarySkeleton />
  if (isSuccess) return <ProfileSummaryContent {...data} />
}
