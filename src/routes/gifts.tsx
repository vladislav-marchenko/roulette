import { Empty } from '@/components/Empty'
import { Error } from '@/components/Error'
import { GiftsContent } from '@/components/Gifts/GiftsContent'
import { GiftsSkeleton } from '@/components/Gifts/GiftsSkeleton'
import { getRewards } from '@/services/api'
import { useInfiniteQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gifts')({
  component: RouteComponent
})

function RouteComponent() {
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
    queryKey: ['rewards'],
    queryFn: ({ pageParam }) => getRewards(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.hasNext) return pages.length + 1
    }
  })

  const isEmpty = !data?.pages[0].rewards.length

  if (isError) {
    return <Error error={error} refetch={refetch} />
  }

  if (!isFetching && isEmpty) {
    return <Empty title='No rewards found' className='flex-auto' />
  }

  return (
    <div className='grid w-full flex-auto grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4'>
      {isSuccess && (
        <GiftsContent
          pages={data.pages}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
      {isFetching && <GiftsSkeleton />}
    </div>
  )
}
