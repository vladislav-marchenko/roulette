import { Button } from '@/components/Button'
import { Star } from '@/components/Icons'
import { createFileRoute } from '@tanstack/react-router'
import { FaArrowUpLong } from 'react-icons/fa6'
import { HiPlus } from 'react-icons/hi'

export const Route = createFileRoute('/deposit')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div>
      <div className='flex w-full flex-col items-center gap-3 rounded-3xl bg-neutral-800 p-4'>
        <h5 className='text-sm font-bold text-neutral-400'>Balance</h5>
        <span className='flex items-center gap-1 text-2xl font-bold'>
          <Star size={20} /> 25 Stars
        </span>
        <div className='flex gap-2'>
          <Button className='flex items-center gap-1'>
            Deposit <HiPlus size={22} />
          </Button>
          <Button variant='secondary' className='flex items-center gap-1'>
            Withdraw <FaArrowUpLong size={14} />
          </Button>
        </div>
      </div>
    </div>
  )
}
