import { RecentActionsContent } from './RecentActionsContent'
import { RecentActionsSkeleton } from './RecentActionsSkeleton'
import { Error } from '@/components/Error'
import { getTransactions } from '@/services/api'
import { useQuery } from '@tanstack/react-query'

export const RecentActions = () => {
  const { data, isLoading, isSuccess, isError, error, refetch } = useQuery({
    queryKey: ['transactions'],
    queryFn: getTransactions
  })

  return (
    <div className='space-y-4'>
      <h2>Recent Actions</h2>
      <div className='flex flex-col gap-4'>
        {isLoading && <RecentActionsSkeleton />}
        {isSuccess && <RecentActionsContent transactions={data} />}
      </div>
      {isError && <Error error={error} refetch={refetch} />}
    </div>
  )
}
