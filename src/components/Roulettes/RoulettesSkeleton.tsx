import { RoulettesItemSkeleton } from './RoulettesItemSkeleton'

export const RoulettesSkeleton = () => {
  return Array.from({ length: 10 }).map((_, index) => (
    <RoulettesItemSkeleton key={index} />
  ))
}
