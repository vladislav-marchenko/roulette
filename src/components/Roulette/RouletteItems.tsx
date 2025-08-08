import { RouletteItem } from './RouletteItem'
import { REPEAT_COUNT } from '@/consts'
import type { Prize } from '@/types/api'
import type { FC } from 'react'

export const RouletteItems: FC<{ prizes: Prize[] }> = ({ prizes }) => {
  return Array(REPEAT_COUNT)
    .fill(prizes)
    .flat()
    .map((prize: Prize, index) => <RouletteItem key={index} {...prize} />)
}
