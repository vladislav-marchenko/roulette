import { Star } from './Icons'
import { cn } from '@/utils'
import type { FC } from 'react'
import { FaPlus } from 'react-icons/fa'

export const Balance: FC<{ className?: string }> = ({ className }) => {
  return (
    <button
      className={cn(
        'flex max-w-max cursor-pointer items-center gap-2 rounded-full bg-neutral-700 p-[5px]',
        className
      )}
    >
      <div className='flex items-center gap-1 text-sm leading-none font-bold'>
        <Star size={12} /> 25
      </div>
      <div className='rounded-full bg-white p-1 text-black'>
        <FaPlus size={10} />
      </div>
    </button>
  )
}
