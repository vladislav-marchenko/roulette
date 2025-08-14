import { RecentActionsContent } from './RecentActionsContent'
import { RecentActionsSkeleton } from './RecentActionsSkeleton'
import { Empty } from '@/components/Empty'
import { Error } from '@/components/Error'
import { getActions } from '@/services/api'
import { useInfiniteQuery } from '@tanstack/react-query'

export const RecentActions = () => {
  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    isSuccess,
    isError,
    error,
    refetch
  } = useInfiniteQuery({
    queryKey: ['actions'],
    queryFn: ({ pageParam }) => getActions(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.hasNext) return pages.length + 1
    }
  })

  const isEmpty = !data?.pages[0].actions.length

  return (
    <div className='space-y-4'>
      <h2>Recent Actions</h2>
      <div className='flex flex-col gap-4'>
        {isSuccess && !isEmpty && (
          <RecentActionsContent
            pages={data.pages}
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        )}
        {!isFetching && isEmpty && <Empty title='No actions found' />}
        {isFetching && <RecentActionsSkeleton />}
      </div>
      {isError && <Error error={error} refetch={refetch} />}
    </div>
  )
}
