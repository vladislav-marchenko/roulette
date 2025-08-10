import { TasksCategoryItem } from './TasksCategoryItem'
import type { Task } from '@/types/api'
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
        {tasks.map(({ _id, title, reward, code }) => (
          <TasksCategoryItem
            key={_id}
            title={title}
            reward={reward}
            code={code}
          />
        ))}
      </div>
    </div>
  )
}
