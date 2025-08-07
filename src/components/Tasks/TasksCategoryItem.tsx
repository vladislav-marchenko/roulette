import { Star } from '../Icons'
import type { Task } from '@/types'
import type { FC } from 'react'

export const TasksCategoryItem: FC<Task> = ({
  title,
  icon: Icon,
  color,
  reward
}) => {
  return (
    <div className='group flex items-start gap-1.5'>
      <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-700'>
        <Icon size={22} color={color} />
      </div>
      <div className='flex flex-auto items-center border-b border-neutral-700/70 pb-2 group-last:border-none group-last:pb-0'>
        <div className='flex flex-auto flex-col'>
          <span className='text-sm leading-tight font-bold'>{title}</span>
          <span className='flex items-center gap-1 text-sm font-medium'>
            {reward} <Star size={12} />
          </span>
        </div>
        <button className='cursor-pointer rounded-full bg-neutral-700 px-4 py-1 text-sm font-semibold'>
          Check
        </button>
      </div>
    </div>
  )
}
