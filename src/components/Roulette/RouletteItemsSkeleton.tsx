import { RouletteItemSkeleton } from './RouletteItemSkeleton'

export const RouletteItemsSkeleton = () => {
  return Array.from({ length: 20 }).map((_, index) => (
    <RouletteItemSkeleton key={index} />
  ))
}
