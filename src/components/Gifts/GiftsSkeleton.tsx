import { GiftsItemSkeleton } from './GiftsItemSkeleton'

export const GiftsSkeleton = () => {
  return Array.from({ length: 10 }).map((_, index) => (
    <GiftsItemSkeleton key={index} />
  ))
}
