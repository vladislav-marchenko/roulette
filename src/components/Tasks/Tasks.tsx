import { TasksCategory } from './TasksCategory'
import { tasks } from '@/consts'

export const Tasks = () => {
  return (
    <div className='space-y-4'>
      <h2>Tasks</h2>
      <div className='flex flex-col gap-4 rounded-xl bg-neutral-800 p-3'>
        {tasks.map(({ category, tasks }) => (
          <TasksCategory key={category} name={category} tasks={tasks} />
        ))}
      </div>
    </div>
  )
}
