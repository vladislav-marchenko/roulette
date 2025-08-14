import { RecentActionsItemSkeleton } from './RecentActionsItemSkeleton'

export const RecentActionsSkeleton = () => {
  return Array.from({ length: 20 }).map((_, index) => (
    <RecentActionsItemSkeleton key={index} />
  ))
}
