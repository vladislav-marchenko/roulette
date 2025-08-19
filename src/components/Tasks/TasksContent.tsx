import { TasksCategory } from './TasksCategory'
import type { Task } from '@/types/api'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const TasksContent: FC<{ tasks: Task[] }> = ({ tasks }) => {
  const { t } = useTranslation()
  const oneTimeTasks = tasks.filter((task) => task.type === 'one_time')
  const dailyTasks = tasks.filter((task) => task.type === 'daily')

  return (
    <>
      <TasksCategory
        name={t('profile.tasks.categories.oneTime')}
        tasks={oneTimeTasks}
      />
      <TasksCategory
        name={t('profile.tasks.categories.daily')}
        tasks={dailyTasks}
      />
    </>
  )
}
