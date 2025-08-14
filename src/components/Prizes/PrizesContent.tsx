import { PrizesItem } from './PrizesItem'
import type { Prize } from '@/types/api'
import type { FC } from 'react'

export const PrizesContent: FC<{ prizes: Prize[] }> = ({ prizes }) => {
  return prizes.map((prize) => <PrizesItem key={prize._id} {...prize} />)
}
