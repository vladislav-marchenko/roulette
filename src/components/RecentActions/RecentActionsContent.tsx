import { RecentActionsItem } from './RecentActionsItem'
import { useObserver } from '@/hooks/useObserver'
import type { ActionsResponse } from '@/types/api'
import type { InfiniteData } from '@tanstack/react-query'
import { useMemo, type FC } from 'react'

interface RecentActionsContentProps
  extends Pick<InfiniteData<ActionsResponse>, 'pages'> {
  fetchNextPage: () => void
  isFetchingNextPage: boolean
}

export const RecentActionsContent: FC<RecentActionsContentProps> = ({
  pages,
  fetchNextPage,
  isFetchingNextPage
}) => {
  const actions = useMemo(() => pages.flatMap((page) => page.actions), [pages])
  const lastItemRef = useObserver<HTMLDivElement>(
    fetchNextPage,
    !isFetchingNextPage
  )

  return actions.map((action, index) => (
    <div
      key={index}
      ref={index === actions.length - 1 ? lastItemRef : null}
      className='group'
    >
      <RecentActionsItem {...action} />
    </div>
  ))
}
