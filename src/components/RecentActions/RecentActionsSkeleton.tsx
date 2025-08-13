import { RecentActionsItemSkeleton } from './RecentActionsItemSkeleton'

export const RecentActionsSkeleton = () => {
  return Array.from({ length: 5 }).map((_, index) => (
    <RecentActionsItemSkeleton key={index} />
  ))
}
