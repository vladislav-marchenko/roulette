import { GiftsItem } from './GiftsItem'
import { useObserver } from '@/hooks/useObserver'
import type { RewardsResponse } from '@/types/api'
import type { InfiniteData } from '@tanstack/react-query'
import { useMemo, type FC } from 'react'

interface GiftsContentProps
  extends Pick<InfiniteData<RewardsResponse>, 'pages'> {
  fetchNextPage: () => void
  isFetchingNextPage: boolean
}

export const GiftsContent: FC<GiftsContentProps> = ({
  pages,
  fetchNextPage,
  isFetchingNextPage
}) => {
  const rewards = useMemo(() => pages.flatMap((page) => page.rewards), [pages])
  const lastItemRef = useObserver<HTMLDivElement>(
    fetchNextPage,
    !isFetchingNextPage
  )

  return rewards.map(({ _id, createdAt, prize: { key, ...prize } }, index) => (
    <div key={_id} ref={index === rewards.length - 1 ? lastItemRef : null}>
      <GiftsItem createdAt={createdAt} {...prize} />
    </div>
  ))
}
