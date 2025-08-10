import { TasksItemSkeleton } from './TasksItemSkeleton'

export const TasksSkeleton = () => {
  return Array.from({ length: 5 }).map((_, index) => (
    <TasksItemSkeleton key={index} />
  ))
}
