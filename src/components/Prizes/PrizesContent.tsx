import { PrizesItem } from './PrizesItem'
import type { Prize } from '@/types/api'
import type { FC } from 'react'

export const PrizesContent: FC<{ prizes: Prize[] }> = ({ prizes }) => {
  return prizes.map(({ image, name, price }) => (
    <PrizesItem key={name} image={image} name={name} price={price} />
  ))
}
