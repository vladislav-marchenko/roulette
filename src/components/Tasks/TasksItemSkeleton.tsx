import { Button } from '@/components/Button'

export const TasksItemSkeleton = () => {
  return (
    <div className='flex items-center justify-between gap-4'>
      <div className='flex gap-1'>
        <div className='skeleton icon bg-neutral-700' />
        <div className='flex flex-col gap-1'>
          <div className='skeleton h-4 w-28 rounded-md' />
          <div className='skeleton h-3 w-16 rounded-md' />
        </div>
      </div>
      <Button size='sm' variant='secondary' disabled className='px-4 py-1'>
        Check
      </Button>
    </div>
  )
}
