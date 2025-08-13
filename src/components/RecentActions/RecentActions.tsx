import { RecentActionsContent } from './RecentActionsContent'
import { RecentActionsSkeleton } from './RecentActionsSkeleton'
import { Error } from '@/components/Error'
import { getTransactions } from '@/services/api'
import { useInfiniteQuery } from '@tanstack/react-query'

export const RecentActions = () => {
  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch
  } = useInfiniteQuery({
    queryKey: ['transactions'],
    queryFn: ({ pageParam }) => getTransactions(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.hasNext) return pages.length + 1
    }
  })

  return (
    <div className='space-y-4'>
      <h2>Recent Actions</h2>
      <div className='flex flex-col gap-4'>
        {isLoading && <RecentActionsSkeleton />}
        {isSuccess && (
          <RecentActionsContent
            pages={data.pages}
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        )}
      </div>
      {isError && <Error error={error} refetch={refetch} />}
    </div>
  )
}
