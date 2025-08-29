import { RoulettesItem } from './RoulettesItem'
import type { Roulette } from '@/types/api'
import type { FC } from 'react'

export const RoulettesContent: FC<{
  roulettes: Omit<Roulette, 'prizes'>[]
}> = ({ roulettes }) => {
  return roulettes.map((roulette) => (
    <RoulettesItem key={roulette._id} {...roulette} />
  ))
}
