import { GiftsItem } from './GiftsItem'
import { useObserver } from '@/hooks/useObserver'
import type { RewardsResponse } from '@/types/api'
import type { InfiniteData } from '@tanstack/react-query'
import { type FC } from 'react'

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
  const rewards = pages.flatMap((page) => page.rewards)
  const lastItemRef = useObserver<HTMLDivElement>(
    fetchNextPage,
    !isFetchingNextPage
  )

  return rewards.map((reward, index) => (
    <GiftsItem
      key={reward._id}
      ref={index === rewards.length - 1 ? lastItemRef : null}
      {...reward}
    />
  ))
}
