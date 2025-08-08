import { Star } from './Icons'
import { cn } from '@/utils'
import type { FC } from 'react'

interface PriceProps {
  value: number
  className?: string
}

export const Price: FC<PriceProps> = ({ value, className }) => {
  return (
    <div
      className={cn(
        'flex max-w-max items-center gap-1 rounded-full bg-neutral-700 px-2 py-1',
        className
      )}
    >
      <span className='text-xs leading-tight font-bold text-neutral-200'>
        {value}
      </span>
      <Star size={12} />
    </div>
  )
}
