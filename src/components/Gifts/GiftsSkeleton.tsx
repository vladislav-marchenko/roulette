import { GiftsItemSkeleton } from './GiftsItemSkeleton'

export const GiftsSkeleton = () => {
  return Array.from({ length: 20 }).map((_, index) => (
    <GiftsItemSkeleton key={index} />
  ))
}
