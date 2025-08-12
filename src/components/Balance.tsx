import { Button } from './Button'
import { Star } from './Icons'
import { getMe } from '@/services/api'
import { cn } from '@/utils'
import { useQuery } from '@tanstack/react-query'
import type { FC } from 'react'
import { HiPlus } from 'react-icons/hi'

export const Balance: FC<{ className?: string }> = ({ className }) => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['me'],
    queryFn: getMe
  })

  return (
    <Button
      to='/balance'
      variant='secondary'
      className={cn(
        'flex max-w-max cursor-pointer items-center gap-2 rounded-full bg-neutral-700 p-[5px]',
        { 'animate-pulse': isLoading },
        className
      )}
    >
      <div
        className={cn(
          'flex items-center gap-1 text-sm leading-none font-bold',
          isError && 'text-red-500'
        )}
      >
        <Star size={12} />
        {isSuccess && data.balance}
        {isLoading && '???'}
        {isError && 'Unable to load balance'}
      </div>
      <div className='rounded-full bg-white p-0.5 text-black'>
        <HiPlus />
      </div>
    </Button>
  )
}
