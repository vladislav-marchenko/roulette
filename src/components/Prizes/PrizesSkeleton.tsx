import { PrizesItemSkeleton } from './PrizesItemSkeleton'

export const PrizesSkeleton = () => {
  return Array.from({ length: 10 }).map((_, index) => (
    <PrizesItemSkeleton key={index} />
  ))
}
