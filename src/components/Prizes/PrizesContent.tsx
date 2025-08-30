import { PrizesItem } from './PrizesItem'
import type { Prize } from '@/types/api'
import { useMemo, type FC } from 'react'

export const PrizesContent: FC<{ prizes: Prize[] }> = ({ prizes }) => {
  const sortedPrizes = useMemo(
    () => [...prizes].sort((a, b) => b.price.stars - a.price.stars),
    [prizes]
  )

  return sortedPrizes.map((prize) => <PrizesItem key={prize._id} {...prize} />)
}
