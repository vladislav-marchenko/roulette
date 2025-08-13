import { RecentActionsItem } from './RecentActionsItem'
import { useObserver } from '@/hooks/useObserver'
import type { TransactionsResponse } from '@/types/api'
import type { InfiniteData } from '@tanstack/react-query'
import { useMemo, type FC } from 'react'

interface RecentActionsContentProps
  extends Pick<InfiniteData<TransactionsResponse>, 'pages'> {
  fetchNextPage: () => void
  isFetchingNextPage: boolean
}

export const RecentActionsContent: FC<RecentActionsContentProps> = ({
  pages,
  fetchNextPage,
  isFetchingNextPage
}) => {
  const transactions = useMemo(
    () => pages.flatMap((page) => page.transactions),
    [pages]
  )
  const lastItemRef = useObserver<HTMLDivElement>(
    fetchNextPage,
    !isFetchingNextPage
  )

  return transactions.map((transaction, index) => (
    <div
      key={index}
      ref={index === transactions.length - 1 ? lastItemRef : null}
      className='group'
    >
      <RecentActionsItem {...transaction} />
    </div>
  ))
}
