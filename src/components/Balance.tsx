import { Star } from './Icons'
import { cn } from '@/utils'
import { Link } from '@tanstack/react-router'
import type { FC } from 'react'
import { HiPlus } from 'react-icons/hi'

export const Balance: FC<{ className?: string }> = ({ className }) => {
  return (
    <Link
      to='/deposit'
      className={cn(
        'flex max-w-max items-center gap-2 rounded-full bg-neutral-700 p-[5px]',
        className
      )}
    >
      <div className='flex items-center gap-1 text-sm leading-none font-bold'>
        <Star size={12} /> 25
      </div>
      <div className='rounded-full bg-white p-0.5 text-black'>
        <HiPlus />
      </div>
    </Link>
  )
}
