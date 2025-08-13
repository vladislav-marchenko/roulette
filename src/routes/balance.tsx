import { DepositStars } from '@/components/DepositStars'
import { Star } from '@/components/Icons'
import { RecentActions } from '@/components/RecentActions/RecentActions'
import { WithdrawStars } from '@/components/WithdrawStars'
import { getMe } from '@/services/api'
import { cn } from '@/utils'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/balance')({
  component: RouteComponent
})

function RouteComponent() {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['me'],
    queryFn: getMe
  })

  return (
    <div className='mx-auto flex w-full max-w-2xl flex-col gap-4'>
      <div className='flex w-full flex-col items-center gap-3 rounded-3xl bg-neutral-800 p-4'>
        <h5 className='text-sm font-bold text-neutral-400'>Balance</h5>
        <span
          className={cn('flex items-center gap-1 text-2xl font-bold', {
            'animate-pulse': isLoading,
            'text-red-500': isError
          })}
        >
          <Star size={20} />
          {isLoading && '??? Stars'}
          {isSuccess && `${data.balance} Stars`}
          {isError && 'Unable to load balance'}
        </span>
        <div className='flex gap-2'>
          <DepositStars />
          <WithdrawStars />
        </div>
      </div>
      <RecentActions />
    </div>
  )
}
