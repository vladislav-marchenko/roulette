import { Star } from '@/components/Icons'
import { IoIosArrowForward } from 'react-icons/io'

export const RecentActionsItemSkeleton = () => {
  return (
    <div className='flex gap-4'>
      <div className='skeleton h-10 w-10 rounded-xl' />
      <div className='divider flex flex-auto items-center justify-between'>
        <div className='flex flex-col gap-1'>
          <div className='skeleton h-4 w-28 rounded-md' />
          <div className='skeleton h-3 w-16 rounded-md' />
        </div>
        <div className='flex items-center gap-2'>
          <div className='flex animate-pulse items-center gap-1'>
            <span className='text-sm font-medium'>???</span>
            <Star />
          </div>
          <IoIosArrowForward className='text-neutral-400' />
        </div>
      </div>
    </div>
  )
}
