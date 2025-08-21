import { Empty } from '@/components/Empty'
import { Error } from '@/components/Error'
import { GiftsContent } from '@/components/Gifts/GiftsContent'
import { GiftsSkeleton } from '@/components/Gifts/GiftsSkeleton'
import { getRewards } from '@/services/api'
import { useInfiniteQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/gifts')({
  component: RouteComponent
})

function RouteComponent() {
  const { t } = useTranslation()
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
    return <Error error={error} refetch={refetch} className='flex-auto' />
  }

  if (!isFetching && isEmpty) {
    return <Empty title={t('inventory.empty')} className='flex-auto' />
  }

  return (
    <div className='grid w-full grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-4'>
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
