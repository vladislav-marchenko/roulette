import { DepositStars } from '@/components/DepositStars'
import { Star } from '@/components/Icons'
import { WithdrawStars } from '@/components/WithdrawStars'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/balance')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex w-full flex-col items-center gap-3 rounded-3xl bg-neutral-800 p-4'>
        <h5 className='text-sm font-bold text-neutral-400'>Balance</h5>
        <span className='flex items-center gap-1 text-2xl font-bold'>
          <Star size={20} /> 25 Stars
        </span>
        <div className='flex gap-2'>
          <DepositStars />
          <WithdrawStars />
        </div>
      </div>
      <h2>Recent Actions</h2>
    </div>
  )
}
