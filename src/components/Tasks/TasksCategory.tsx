import { TasksCategoryItem } from './TasksCategoryItem'
import type { Task } from '@/types'
import type { FC } from 'react'

interface TasksCategoryProps {
  name: string
  tasks: Task[]
}

export const TasksCategory: FC<TasksCategoryProps> = ({ name, tasks }) => {
  return (
    <div>
      <h4 className='pb-4'>{name}</h4>
      <div className='flex flex-col gap-4'>
        {tasks.map(({ title, icon, color, reward }) => (
          <TasksCategoryItem
            key={title}
            title={title}
            icon={icon}
            color={color}
            reward={reward}
          />
        ))}
      </div>
    </div>
  )
}
