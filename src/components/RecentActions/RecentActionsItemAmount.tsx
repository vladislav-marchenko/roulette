import { Star } from '@/components/Icons'
import type { Action } from '@/types/api'
import type { FC } from 'react'

export const RecentActionsItemAmount: FC<Pick<Action, 'type' | 'amount'>> = ({
  type,
  amount
}) => {
  return (
    <div className='flex items-center gap-1'>
      <span className='text-sm font-semibold'>
        {type === 'deposit' ? '+' : '-'}
        {amount}
      </span>
      <Star size={12} />
    </div>
  )
}
