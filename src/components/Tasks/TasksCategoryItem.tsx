import { Button } from '../Button'
import { Star } from '@/components/Icons'
import { taskIcons } from '@/consts'
import type { Task } from '@/types/api'
import type { FC } from 'react'

const hasCode = (code: string): code is keyof typeof taskIcons => {
  return code in taskIcons
}

const getTaskIcon = (code: string) => {
  if (hasCode(code)) return taskIcons[code]
  return taskIcons.default
}

export const TasksCategoryItem: FC<Omit<Task, '_id' | 'type'>> = ({
  title,
  reward,
  code
}) => {
  const { icon: Icon, color } = getTaskIcon(code)

  return (
    <div className='group flex items-start gap-1.5'>
      <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-700'>
        <Icon size={22} color={color} />
      </div>
      <div className='divider flex flex-auto items-center'>
        <div className='flex flex-auto flex-col'>
          <span className='text-sm leading-tight font-bold'>{title}</span>
          <span className='flex items-center gap-1 text-sm font-medium'>
            {reward} <Star size={12} />
          </span>
        </div>
        <Button size='sm' variant='secondary' className='px-4 py-1'>
          Check
        </Button>
      </div>
    </div>
  )
}
