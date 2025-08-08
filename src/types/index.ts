import type { FC } from 'react'
import type { IconType } from 'react-icons'

export interface Task {
  title: string
  icon: IconType | FC<{ size?: number }>
  color?: string
  reward: number
}
