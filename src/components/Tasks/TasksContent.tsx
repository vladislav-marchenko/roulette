import { TasksCategory } from './TasksCategory'
import type { Task } from '@/types/api'
import type { FC } from 'react'

export const TasksContent: FC<{ tasks: Task[] }> = ({ tasks }) => {
  const oneTimeTasks = tasks.filter((task) => task.type === 'one_time')
  const dailyTasks = tasks.filter((task) => task.type === 'daily')

  return (
    <>
      <TasksCategory name='One time' tasks={oneTimeTasks} />
      <TasksCategory name='Daily' tasks={dailyTasks} />
    </>
  )
}
