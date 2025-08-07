import { Star } from './Icons'
import type { FC } from 'react'

export const Price: FC<{ value: number }> = ({ value }) => {
  return (
    <div className='flex max-w-max items-center gap-1 rounded-full bg-neutral-700 px-2 py-1'>
      <span className='text-xs leading-tight font-bold text-neutral-200'>
        {value}
      </span>
      <Star size={12} />
    </div>
  )
}
