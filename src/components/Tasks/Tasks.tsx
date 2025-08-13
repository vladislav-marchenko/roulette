import { TasksContent } from './TasksContent'
import { TasksSkeleton } from './TasksSkeleton'
import { Error } from '@/components/Error'
import { getTasks } from '@/services/api'
import { useQuery } from '@tanstack/react-query'

export const Tasks = () => {
  const { data, isLoading, isSuccess, isError, error, refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks
  })

  return (
    <div className='space-y-4'>
      <h2>Tasks</h2>
      <div className='flex flex-col gap-4 rounded-xl bg-neutral-800 p-3'>
        {isLoading && <TasksSkeleton />}
        {isSuccess && <TasksContent tasks={data} />}
      </div>
      {isError && <Error error={error} refetch={refetch} />}
    </div>
  )
}
